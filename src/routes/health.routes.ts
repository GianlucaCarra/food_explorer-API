import { Response, Request, Router } from "express";
import connection from "../database/knex";

const healthRoutes = Router();

healthRoutes.head("/", (req: Request, res: Response) => {
  console.log("Server is healthy!");

  return res.json();
});

healthRoutes.head("/databse", async (req: Request, res: Response) => {
  await connection("database-health").first().del();

  await connection("database-health").insert({});

  return res.json();
});

export default healthRoutes;