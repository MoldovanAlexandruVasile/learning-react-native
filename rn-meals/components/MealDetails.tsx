import { StyleSheet, View, Text } from "react-native";
import Meal from "../models/meal";
import { FunctionComponent } from "react";
import Badge from "./Badge";

type Props = {
  meal: Meal;
};

const MealDetails: FunctionComponent<Props> = ({ meal }) => {
  return (
    <View style={styles.details}>
      <Badge>
        <Text style={styles.detailsItem}>{meal.duration}m</Text>
      </Badge>
      <Badge>
        <Text style={styles.detailsItem}>{meal.complexity.toUpperCase()}</Text>
      </Badge>
      <Badge>
        <Text style={styles.detailsItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  detailsItem: {
    fontSize: 12,
  },
});

export default MealDetails;
