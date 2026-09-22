import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/shared/Title";
import { COLORS } from "../../constants/colors";
import PrimaryButton from "../components/shared/PrimaryButton";
import { FunctionComponent } from "react";

type Props = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

const GameOverScreen: FunctionComponent<Props> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View>
      <Title>Game over</Title>

      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 200,
    margin: 8,
    overflow: "hidden",
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: COLORS.PRIMARY800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.ACCENT500,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
});

export default GameOverScreen;
