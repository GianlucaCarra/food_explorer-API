import { Response, Request } from "express";
import { IRequestMiddleware } from "../middlewares/ensureAuth";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import connection from "../database/knex";
import AppError from "../utils/AppError";
import authConfig from "../config/auth";

class SessionsController {
  env = process.env.NODE_ENV || "development";

  async createSession(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await connection("users").where({ email }).first();

    if(!user) {
      throw new AppError("E-mail or password incorrect!", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError("E-mail or password incorrect!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: this.env === "development" ? false : true,
      sameSite: "none",
      domain: this.env === "development" ? "localhost" : ".vististudi.online",
      maxAge: 24 * 60 * 60 * 1000
    });

    delete user.password, user.role;

    return res.status(201).json({ user });
  }

  async finishSession(req: Request, res: Response): Promise<Response> {
    res.clearCookie("token", {
      httpOnly: true,
      secure: this.env === "development" ? false : true,
      sameSite: "none",
      domain: this.env === "development" ? "localhost" : ".vististudi.online",
    });

    return res.status(200).json();
  }

  async getCookies(req: IRequestMiddleware, res: Response): Promise<Response> {
    if (!req.user) {
      throw new AppError("User without role!", 401);
    }

    return res.json({ role: req.user.role });
  }
}

export default SessionsController;