import { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

type Props = {
  round: number;
  guess: number;
};

const RoundItem: FunctionComponent<Props> = ({ round, guess }) => {
  return (
    <View style={styles.root}>
      <Text>#{round + 1}</Text>
      <Text style={styles.text}>Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    margin: 8,
    borderRadius: 28,
    backgroundColor: COLORS.ACCENT500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    color: COLORS.PRIMARY500,
  },
});

export default RoundItem;
