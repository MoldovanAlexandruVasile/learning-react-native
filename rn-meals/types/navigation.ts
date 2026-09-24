import Category from "../models/category";
import Meal from "../models/meal";

export const SCREEN = {
  MEALS_CATEGORIES: "MealsCategories",
  MEALS_CATEGORIES_DRAWER: "MealsCategoriesDrawer",
  MEAL_OVERVIEW: "MealOverview",
  MEAL_DETAILS: "MealDetails",
  FAVORITE_MEALS: "FavoriteMeals",
} as const;

export type StackParamList = {
  [SCREEN.MEALS_CATEGORIES]: undefined;
  [SCREEN.MEALS_CATEGORIES_DRAWER]: undefined;
  [SCREEN.MEAL_OVERVIEW]: { category: Category };
  [SCREEN.MEAL_DETAILS]: { meal: Meal };
  [SCREEN.FAVORITE_MEALS]: undefined;
};
