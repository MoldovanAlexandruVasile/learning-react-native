import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { ItemData } from "./types/goal.types";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [isAddMode, setIsAddMode] = useState<boolean>(false);
  // const [goals, setGoals] = useState<string[]>([]);
  const [goals, setGoals] = useState<ItemData[]>([]);

  const addGoalHandler = (goal: string) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: goal },
    ]);
  };

  const deleteGoalHandler = (goalId: string) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== goalId),
    );
  };

  const triggerAddGoalHandler = () => {
    setIsAddMode((current) => !current);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title={isAddMode ? "Cancel" : "Add New Goal"}
          onPress={triggerAddGoalHandler}
        />

        <GoalInput
          isVisible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={triggerAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal, index) => (
            <Text key={index} style={styles.goalItem}>
              {goal}
            </Text>
          ))}
        </ScrollView> */}
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={({ item }) => (
              <GoalItem
                item={item}
                onPress={() => deleteGoalHandler(item.key)}
              />
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
