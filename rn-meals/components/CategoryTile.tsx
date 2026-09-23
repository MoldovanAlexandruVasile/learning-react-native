import { FunctionComponent } from "react";
import Category from "../models/category";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { COLORS } from "../assets/styles/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../types/navigation";

type Props = {
  category: Category;
};

const CateogryTile: FunctionComponent<Props> = ({ category }) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleTilePress = () => {
    navigate("MealOverview", { category });
  };

  return (
    <View style={styles.root}>
      <Pressable
        onPress={handleTilePress}
        android_ripple={{ color: COLORS.RIPPLE }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={[styles.card, { backgroundColor: category.color }]}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Platform.select({ ios: "black" }),
    shadowOffset: Platform.select({ ios: { width: 0, height: 4 } }),
    shadowRadius: Platform.select({ ios: 6 }),
    shadowOpacity: Platform.select({ ios: 1 }),
  },
  button: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default CateogryTile;
