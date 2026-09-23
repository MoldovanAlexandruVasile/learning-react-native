import { FunctionComponent } from "react";
import { View, Text, FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../types/navigation";
import { MEALS } from "../mocks/data.mock";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

const CategoryMealsScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<StackParamList, "MealOverview">>();
  const { category } = route.params;

  const meals: Meal[] = MEALS.filter((meal) =>
    meal.categoryIds.includes(category.id),
  );

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
