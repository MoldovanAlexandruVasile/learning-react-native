import { FunctionComponent, PropsWithChildren } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants/colors";

const Title: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: COLORS.ACCENT500,
    textAlign: "center",
    maxWidth: "80%",
    // borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderWidth: 0,
    borderColor: "blue",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
    margin: 8,
  },
});

export default Title;
