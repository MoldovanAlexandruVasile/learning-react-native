import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "./constants/colors";
import GameOverScreen from "./src/screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const { top, bottom } = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  const handleNumberSelected = (newNumber: number) => {
    setUserNumber(newNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const startNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const increaseRounds = () => {
    setGuessRounds((curr) => curr + 1);
  };

  let screen = <StartGameScreen onNumberSelected={handleNumberSelected} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        onIncreaseRounds={increaseRounds}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />

      <LinearGradient
        colors={[COLORS.PRIMARY500, COLORS.ACCENT500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <View
            style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}
          >
            {screen}
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
