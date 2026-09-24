import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useRoute } from "../utils/use-route";
import { SCREEN } from "../types/navigation";
import { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "../utils/use-navigation";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/FavoriteMealsContext";

const MealDetailsScreen = () => {
  const { setOptions } = useNavigation();
  const { params } = useRoute<typeof SCREEN.MEAL_DETAILS>();

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const meal = params?.meal;

  const mealIsFavorite =
    favorites.findIndex((fav) => fav.id === meal.id) !== -1;

  const handlePress = () => {
    if (mealIsFavorite) {
      removeFavorite(meal.id);
    } else {
      addFavorite(meal);
    }
  };

  useEffect(() => {
    setOptions({ title: meal.title });
  }, [meal.title, setOptions]);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <IconButton
          name={!!mealIsFavorite ? "star" : "star-outline"}
          onPress={handlePress}
        />
      ),
    });
  }, [setOptions, mealIsFavorite]);

  return (
    <View style={styles.root}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />

      <MealDetails meal={meal} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Ingredients</Text>
          {meal.ingredients.map((ingredient) => (
            <Text style={styles.item} key={ingredient}>
              {ingredient}
            </Text>
          ))}

          <Text style={styles.title}>Steps</Text>
          {meal.steps.map((step) => (
            <Text style={styles.item} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 16,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 24,
  },
  title: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 8,
    textAlign: "center",
    width: 300,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  innerContainer: {
    gap: 8,
    height: "100%",
  },
});

export default MealDetailsScreen;
