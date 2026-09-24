import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import Meal from "../../models/meal";

type FavoriteContextType = {
  favorites: Meal[];
  addFavorite: (meal: Meal) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoriteContextType>({
  favorites: [],
  addFavorite: (meal: Meal) => {},
  removeFavorite: (id: string) => {},
});

export const FavoritesContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  const addFavorite = (meal: Meal) => {
    setFavoriteMeals((current) => [...current, meal]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMeals((current) => current.filter((meal) => meal.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favoriteMeals,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
