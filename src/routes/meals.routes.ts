import { Router } from "express";
import multer = require("multer");
import MealsController from "../controllers/MealsController";
import verifyRole from "../middlewares/verifyRole";
import ensureAuth from "../middlewares/ensureAuth";

const mealsController = new MealsController();
const mealsRoutes = Router();
const upload = multer();

mealsRoutes.use(ensureAuth);

mealsRoutes.post("/create", verifyRole(["admin"]), upload.single("img"), mealsController.createMeal);

mealsRoutes.delete("/delete/:id", verifyRole(["admin"]), mealsController.deleteMeal);

mealsRoutes.patch("/update/:id", verifyRole(["admin"]), upload.single("img"), mealsController.updateMeal);

mealsRoutes.get("/index", mealsController.mealsIndex);

mealsRoutes.get("/search", mealsController.searchMeals);

mealsRoutes.get("/:id", mealsController.showMeal);

export default mealsRoutes;