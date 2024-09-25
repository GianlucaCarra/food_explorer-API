import { Request, Response } from "express";
import { hash } from "bcryptjs";
import connection from "../database/knex";
import AppError from "../utils/AppError";

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const checkIfUserExists = await connection("users").where({ email }).first();

    if(checkIfUserExists) {
      throw new AppError("This e-mail is alredy taken!");
    }

    if(password.length < 6) {
      throw new AppError("The password must have 6 characters!");
    }

    const hashedPassword = await hash(password, 8);

    await connection("users").insert({
      name,
      email,
      password: hashedPassword
    });

    return res.json();
  }
}

export default UserController;