import { FlatList, View } from "react-native";
import MealItem from "./MealItem";
import { FunctionComponent } from "react";
import Meal from "../models/meal";

type Props = {
  meals: Meal[];
};

const MealsList: FunctionComponent<Props> = ({ meals }) => {
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

export default MealsList;
