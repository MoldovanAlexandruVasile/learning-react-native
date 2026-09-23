import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/shared/PrimaryButton";
import Input from "../components/shared/Input";
import { type FunctionComponent, useState } from "react";
import { COLORS } from "../../constants/colors";
import Title from "../components/shared/Title";

type Props = {
  onNumberSelected: (number: number) => void;
};

const StartGameScreen: FunctionComponent<Props> = ({ onNumberSelected }) => {
  const { height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const marginTop = height < 380 ? 40 : 100;

  const handleInputChange = (text: string) => {
    setEnteredNumber(text);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    const parsedNumber = parseInt(enteredNumber);

    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Please enter a valid number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ],
      );
      return;
    }

    onNumberSelected(parsedNumber);
  };

  return (
    <ScrollView style={styles.root} alwaysBounceVertical={false}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <View style={{ marginTop }}>
          <Title>Guess my number</Title>
          <View style={styles.inputContainer}>
            <Title>Enter a number</Title>

            <View style={styles.inputWrapper}>
              <Input value={enteredNumber} onChangeText={handleInputChange} />
            </View>

            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: COLORS.PRIMARY800,
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
