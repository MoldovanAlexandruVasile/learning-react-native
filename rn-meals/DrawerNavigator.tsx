import { createDrawerNavigator } from "@react-navigation/drawer";
import { SCREEN } from "./types/navigation";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ScreenWrapper from "./screens/ScreenWrapper";
import { COLORS } from "./assets/styles/colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.APP_BACKGROUND },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: COLORS.APP_BACKGROUND },
      }}
    >
      <Drawer.Screen
        name={SCREEN.MEALS_CATEGORIES_DRAWER}
        options={{
          title: "Categories",
        }}
        component={() => (
          <ScreenWrapper>
            <CategoriesScreen />
          </ScreenWrapper>
        )}
      />
      <Drawer.Screen
        name={SCREEN.FAVORITE_MEALS}
        component={() => (
          <ScreenWrapper>
            <FavoritesScreen />
          </ScreenWrapper>
        )}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
