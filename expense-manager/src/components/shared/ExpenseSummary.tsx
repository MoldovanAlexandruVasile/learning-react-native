import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  title: string;
  amount: number;
};

const ExpenseSummary: FunctionComponent<Props> = ({ title, amount }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{`$${amount.toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "darkblue",
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    color: "lightblue",
  },
});

export default ExpenseSummary;
