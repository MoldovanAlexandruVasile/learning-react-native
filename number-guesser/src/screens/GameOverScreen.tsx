import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
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
  const { height, width } = useWindowDimensions();

  let imageSize = 300;
  if (width > height) {
    imageSize = height / 3;
  }

  const imageStyles = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View>
        <Title>Game over</Title>

        <View style={[styles.imageWrapper, imageStyles]}>
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
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageWrapper: {
    margin: 8,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: COLORS.PRIMARY800,
    alignSelf: "center",
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
