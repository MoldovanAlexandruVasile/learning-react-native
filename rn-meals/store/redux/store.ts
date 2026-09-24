import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites";

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
