require("dotenv").config();
require("express-async-errors");
import { Request, Response, NextFunction } from "express";
import { IAppError } from "./utils/AppError";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true,
}));

app.use(routes);

app.use((error: IAppError, req: Request, res: Response, next: NextFunction) => {
  if(error) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
})

app.listen(PORT);