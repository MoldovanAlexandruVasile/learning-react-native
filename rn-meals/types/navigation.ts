import Category from "../models/category";
import Meal from "../models/meal";

export const SCREEN = {
  MEALS_CATEGORIES: "MealsCategories",
  MEAL_OVERVIEW: "MealOverview",
  MEAL_DETAILS: "MealDetails",
} as const;

export type StackParamList = {
  [SCREEN.MEALS_CATEGORIES]: undefined;
  [SCREEN.MEAL_OVERVIEW]: { category: Category };
  [SCREEN.MEAL_DETAILS]: { meal: Meal };
};
