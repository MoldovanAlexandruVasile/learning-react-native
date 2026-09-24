import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Meal from "../../models/meal";

type FavoritesState = {
  meals: Meal[];
};

const initialState: FavoritesState = {
  meals: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: {
      reducer: (state, action: PayloadAction<Meal>) => {
        state.meals.push(action.payload);
      },
      prepare: (meal: Meal) => ({
        payload: { ...meal },
      }),
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.meals = state.meals.filter((meal) => meal.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
