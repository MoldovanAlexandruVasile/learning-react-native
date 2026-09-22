import { FunctionComponent, PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../../constants/colors";

const Title: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: COLORS.ACCENT500,
    textAlign: "center",
  },
});

export default Title;
