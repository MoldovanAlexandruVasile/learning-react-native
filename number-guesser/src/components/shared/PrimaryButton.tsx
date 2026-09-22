import { PropsWithChildren, type FunctionComponent } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../../constants/colors";

type ParentProps = {
  onPress: () => void;
};

type Props = ParentProps & PropsWithChildren;

const PrimaryButton: FunctionComponent<Props> = ({ children, onPress }) => {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: COLORS.PRIMARY600 }}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && { opacity: 0.75 },
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  innerContainer: {
    backgroundColor: COLORS.PRIMARY500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: "open-sans",
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
