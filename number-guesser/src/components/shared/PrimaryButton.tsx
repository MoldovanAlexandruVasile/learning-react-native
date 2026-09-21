import { PropsWithChildren, type FunctionComponent } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

type ParentProps = {
  onPress: () => void;
};

type Props = ParentProps & PropsWithChildren;

const PrimaryButton: FunctionComponent<Props> = ({ children, onPress }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View style={styles.outterContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
