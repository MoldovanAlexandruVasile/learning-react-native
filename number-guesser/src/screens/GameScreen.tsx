import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/shared/Title";
import { FunctionComponent, useEffect, useState } from "react";
import NumberContainer from "../components/game-screen/NumberContainer";
import PrimaryButton from "../components/shared/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import GuessRounds from "../components/game-screen/GuessRounds";

const generateRandomBetween = (min: number, max: number, exclude?: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

type Props = {
  userNumber: number;
  onGameOver: () => void;
  onIncreaseRounds: () => void;
};

const GameScreen: FunctionComponent<Props> = ({
  userNumber,
  onGameOver,
  onIncreaseRounds,
}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuesRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction: "lower" | "greater") => () => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    onIncreaseRounds();
    setCurrentGuess(newGuess);
    setGuesRounds((curr) => [...curr, newGuess]);
  };

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.controls}>
        <Title>Higher or lower?</Title>

        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler("lower")}>
            <Ionicons name="arrow-down" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler("greater")}>
            <Ionicons name="arrow-up" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>

      <GuessRounds rounds={guessRounds} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  controls: {
    alignItems: "center",
    marginTop: 24,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
});

export default GameScreen;
