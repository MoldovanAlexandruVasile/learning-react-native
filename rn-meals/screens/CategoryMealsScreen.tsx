import { FunctionComponent, useEffect } from "react";
import { View, FlatList } from "react-native";

import { MEALS } from "../mocks/data.mock";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import { useNavigation } from "../utils/use-navigation";
import { useRoute } from "../utils/use-route";
import { SCREEN } from "../types/navigation";

const CategoryMealsScreen: FunctionComponent = () => {
  const { setOptions } = useNavigation();
  const route = useRoute<typeof SCREEN.MEAL_OVERVIEW>();

  const category = route.params?.category;

  if (!category) {
    return null;
  }

  const meals: Meal[] = MEALS.filter((meal) =>
    meal.categoryIds.includes(category.id),
  );

  useEffect(() => {
    setOptions({ title: category.title });
  }, [category.title, setOptions]);

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default CategoryMealsScreen;
