import { Router } from "express";
import SessionsController from "../controllers/SessionsController";
import ensureAuth from "../middlewares/ensureAuth";

const sessionsController = new SessionsController();
const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.createSession);

sessionsRoutes.delete("/logout", sessionsController.finishSession);

sessionsRoutes.get("/role", ensureAuth, sessionsController.getCookies);

export default sessionsRoutes;