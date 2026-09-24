import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenWrapper from "./screens/ScreenWrapper";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import { SCREEN, StackParamList } from "./types/navigation";
import { COLORS } from "./assets/styles/colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN.MEALS_CATEGORIES}
          screenOptions={{
            headerBackButtonDisplayMode: "minimal",
            headerStyle: { backgroundColor: COLORS.APP_BACKGROUND },
            headerTintColor: "white",
            contentStyle: { backgroundColor: COLORS.APP_BACKGROUND },
          }}
        >
          <Stack.Screen
            name={SCREEN.MEALS_CATEGORIES}
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name={SCREEN.MEAL_OVERVIEW}
            // options={({ route, navigation }) => {
            //   const category = route.params.category;

            //   return {
            //     title: category.title,
            //   };
            // }}
            component={() => (
              <ScreenWrapper>
                <CategoryMealsScreen />
              </ScreenWrapper>
            )}
          />
          <Stack.Screen
            name={SCREEN.MEAL_DETAILS}
            component={() => (
              <ScreenWrapper>
                <MealDetailsScreen />
              </ScreenWrapper>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
