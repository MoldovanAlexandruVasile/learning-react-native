import { Expense } from "@/types/expenses.types";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
  expense: Expense;
  onPress?: () => void;
};

const ExpenseCard: FunctionComponent<Props> = ({ expense, onPress }) => {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.root}>
      <View style={styles.leftSide}>
        <Text style={styles.title}>{expense.name}</Text>
        <Text style={styles.subtitle}>{expense.date}</Text>
      </View>

      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>${expense.amount}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    gap: 8,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "darkblue",
    fontSize: 16,
  },
  subtitle: {
    color: "blue",
    fontSize: 12,
  },
  amountWrapper: {
    paddingHorizontal: 16,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontWeight: "bold",
    color: "darkblue",
  },
});

export default ExpenseCard;
