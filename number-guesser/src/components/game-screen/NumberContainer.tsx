import { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../../constants/colors";

const NumberContainer: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.ACCENT500,
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
    color: COLORS.ACCENT500,
  },
});

export default NumberContainer;
