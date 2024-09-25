import { NextFunction, Response } from "express";
import { IRequestMiddleware } from "./ensureAuth";
import AppError from "../utils/AppError";

function verifyRole(roleToVerify: string[]) {
  return (req: IRequestMiddleware, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new AppError("User not connected", 401);
    }

    const { role } = req.user;

    if(!roleToVerify.includes(role)) {
      throw new AppError("Unauthorized", 401);
    }

    return next()
  }
}

export default verifyRole;