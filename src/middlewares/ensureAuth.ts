import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import authConfig from "../config/auth";
import AppError from "../utils/AppError";

export interface IRequestMiddleware extends Request {
  user?: {
    id: number,
    role: string
  }
}

interface CustomJWTPayload extends JwtPayload {
  id: number;
  role: string;
}

function ensureAuth(req: IRequestMiddleware, res: Response, next: NextFunction) {
  const cookies = req.cookies;
  const { token } = cookies;

  if(!token) {
    throw new AppError('Not available JWT');
  }
  
  try {
    const { role, sub: user_id } = verify(token, authConfig.jwt.secret) as CustomJWTPayload;

    req.user = {
      id: Number(user_id),
      role
    }

    return next();
  } catch {
    throw new AppError('Invalid JWT');
  }
}

export default ensureAuth;