import { FavoritesContext } from "../store/context/FavoriteMealsContext";
import { useContext } from "react";
import MealsList from "../components/MealsList";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  if (!favorites.length) {
    return (
      <View>
        <Text style={styles.empty}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={favorites} />;
};

const styles = StyleSheet.create({
  empty: {
    color: "white",
    paddingTop: 36,
  },
});

export default FavoritesScreen;
