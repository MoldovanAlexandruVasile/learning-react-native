import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenWrapper from "./screens/ScreenWrapper";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import { StackParamList } from "./types/navigation";
import { COLORS } from "./assets/styles/colors";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerBackButtonDisplayMode: "minimal",
            headerStyle: { backgroundColor: COLORS.APP_BACKGROUND },
            headerTintColor: "white",
            contentStyle: { backgroundColor: COLORS.APP_BACKGROUND },
          }}
        >
          IP
          <Stack.Screen
            name="MealsCategories"
            options={{ title: "Categories" }}
            component={() => (
              <ScreenWrapper>
                <CategoriesScreen />
              </ScreenWrapper>
            )}
          />
          <Stack.Screen
            name="MealOverview"
            options={{ title: "Meals" }}
            component={() => (
              <ScreenWrapper>
                <CategoryMealsScreen />
              </ScreenWrapper>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
