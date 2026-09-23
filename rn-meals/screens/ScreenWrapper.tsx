import { FunctionComponent, PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const ScreenWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScreenWrapper;
