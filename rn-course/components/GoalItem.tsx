import { FunctionComponent } from "react";
import { ItemData } from "../types/goal.types";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  item: ItemData;
  onPress: () => void;
};

const GoalItem: FunctionComponent<Props> = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalItem}>{item.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.8,
  },
});

export default GoalItem;
