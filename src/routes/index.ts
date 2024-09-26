import { Router } from "express";
import userRoutes from "./user.routes";
import mealsRoutes from "./meals.routes";
import sessionsRoutes from "./sessions.routes";
import healthRoutes from "./health.routes";

const routes = Router();

routes.use("/user", userRoutes);

routes.use("/meals", mealsRoutes);

routes.use("/sessions", sessionsRoutes);

routes.use("/health", healthRoutes);

export default routes;