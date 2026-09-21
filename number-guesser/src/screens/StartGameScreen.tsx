import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/shared/PrimaryButton";
import Input from "../components/shared/Input";
import { useState } from "react";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const handleInputChange = (text: string) => {
    setEnteredNumber(text);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    console.log(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <Input
          placeholder="Enter a number"
          value={enteredNumber}
          onChangeText={handleInputChange}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4e0329",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
});

export default StartGameScreen;
