import { FunctionComponent, PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../assets/styles/colors";

const Badge: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.root}>{children}</Text>;
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: COLORS.BADGE,
    color: "black",
  },
});

export default Badge;
