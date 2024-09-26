import { Request, Response } from "express";
import { CloudinaryStorage } from "../providers/CloudinaryStorage";
import connection from "../database/knex";
import AppError from "../utils/AppError";
import BufferToStream from "../utils/BufferToStream";
import IIngredient from "../types/IIngredients";

class MealsController {
  async createMeal(req: Request, res: Response): Promise<Response> {
    const cloudinaryStorage = new CloudinaryStorage();
    const { file } = req;
    const { data } = req.body;
    const { 
      name, 
      desc, 
      price, 
      type, 
      ingredients 
    } = JSON.parse(data);

    if(!file) {
      throw new AppError("File is required!", 404);
    }

    const streamFile = BufferToStream(file.buffer);
    const { publicID, imageURL } = await cloudinaryStorage.saveFile(streamFile);

    const [meal_id] = await connection("meals").insert({
      name,
      desc,
      price,
      type,
      publicID,
      imageURL
    });

    if(ingredients.length > 0) {
      const ingredientsInsert = ingredients.map((ingredient: string) => ({
        name: ingredient,
        meal_id
      }));
  
      await connection("ingredients").insert(ingredientsInsert);
    }
    
    return res.json();
  }

  async mealsIndex(req: Request, res: Response): Promise<Response> {
    const meals = await connection("meals");

    return res.json(meals);
  }

  async searchMeals(req: Request, res: Response): Promise<Response> {
    const { query } = req.query;
    const mealResults = await connection('meals')
      .whereLike('name', `%${query}%`)
      .orderBy('name');
    const ingredientsResults = await connection('ingredients')
      .whereLike('name', `%${query}%`)
      .select("meal_id");
    const mealIdsFromIngredients = ingredientsResults.map((ingredient: IIngredient) => ingredient.meal_id);
    const ingredientMealResults = await connection('meals')
      .whereIn('id', mealIdsFromIngredients)
      .orderBy('name');
    const combinedResults = [...mealResults, ...ingredientMealResults]
    .filter((meal, index, self) => 
      index === self.findIndex((m) => m.id === meal.id)
    );

    return res.json(combinedResults);
  }

  async showMeal(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const meal = await connection("meals").where({ id }).first();
    const ingredients = await connection("ingredients")
      .where({ meal_id: id })
      .orderBy("name");

    return res.json({ 
      ...meal,
      ingredients
    });
  }

  async updateMeal(req: Request, res: Response): Promise<Response> {
    const cloudinaryStorage = new CloudinaryStorage();
    const { id } = req.params;
    const { file } = req;
    const { 
      name,
      desc,
      type,
      price,
      ingredients
    } = JSON.parse(req.body.data);
    const meal = await connection("meals").where({ id }).first();
    const existingIngredients = await connection("ingredients").where({ meal_id: id });

    if(!meal) {
      throw new AppError("Meal not found", 404);
    }

    let publicId = meal.publicId;
    let imageUrl = meal.imageUrl;

    if(file) {
      await cloudinaryStorage.deleteFile(meal.publicId);
      const streamFile = BufferToStream(file.buffer);
      const result = await cloudinaryStorage.saveFile(streamFile);
      publicId = result.publicID;
      imageUrl = result.imageURL;
    }

    const newIngredientNames = ingredients || meal.ingredients;
    const existingIngredientNames = existingIngredients.map((ingredient: IIngredient) => ingredient.name);
    const ingredientsToAdd = newIngredientNames.filter((name: string)=> !existingIngredientNames.includes(name));
    const ingredientsToRemove = existingIngredientNames.filter((name: string)=> !newIngredientNames.includes(name));
    const newIngredients = ingredientsToAdd.map((name: string) => ({
      name,
      meal_id: id
    }));
    const updatedMeal = {
      name: name || meal.name,
      desc: desc || meal.desc,
      price: price || meal.price,
      type: type || meal.type,
      publicId,
      imageUrl
    };

    await connection("meals").where({ id }).update(updatedMeal);

    if(newIngredients.length > 0) {
      await connection("ingredients").insert(newIngredients);
    }

    if(ingredientsToRemove.length > 0) {
      await connection("ingredients")
        .where({ meal_id: id })
        .whereIn('name', ingredientsToRemove)
        .del();
    }

    return res.json();
  }

  async deleteMeal(req: Request, res: Response): Promise<Response> {
    const cloudinaryStorage = new CloudinaryStorage();
    const { id } = req.params;
    const meal = await connection("meals").where({ id }).first();

    await cloudinaryStorage.deleteFile(meal.publicId);
    await connection("meals").where({ id }).delete();
    
    return res.json();
  }
}

export default MealsController;