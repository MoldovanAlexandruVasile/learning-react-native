import { FunctionComponent } from "react";
import Meal from "../models/meal";
import { View, Text } from "react-native";

type Props = {
  meal: Meal;
};

const MealItem: FunctionComponent<Props> = ({ meal }) => {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

export default MealItem;
