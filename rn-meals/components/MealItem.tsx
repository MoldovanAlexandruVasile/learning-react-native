import { FunctionComponent } from "react";
import Meal from "../models/meal";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { COLORS } from "../assets/styles/colors";
import { useNavigation } from "../utils/use-navigation";
import { SCREEN } from "../types/navigation";
import MealDetails from "./MealDetails";

type Props = {
  meal: Meal;
};

const MealItem: FunctionComponent<Props> = ({ meal }) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(SCREEN.MEAL_DETAILS, { meal });
  };

  return (
    <View style={styles.item}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: COLORS.RIPPLE }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>

          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ android: "hidden" }),
    backgroundColor: "white",
    elevation: 4,
    shadowColor: Platform.select({ ios: "black" }),
    shadowOffset: Platform.select({ ios: { width: 0, height: 4 } }),
    shadowRadius: Platform.select({ ios: 6 }),
    shadowOpacity: Platform.select({ ios: 1 }),
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default MealItem;
