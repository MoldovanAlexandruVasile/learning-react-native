import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { Provider } from "jotai";
import { StatusBar, useColorScheme } from "react-native";

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <Provider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          translucent
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="ManageExpenseModal"
            options={{
              presentation: "formSheet",
              sheetAllowedDetents: [0.9],
              sheetInitialDetentIndex: 0,
              sheetGrabberVisible: true,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
