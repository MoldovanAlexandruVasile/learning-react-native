import { type FunctionComponent, useState } from "react";
import { Button, TextInput, StyleSheet, View, Modal } from "react-native";

type Props = {
  isVisible: boolean;
  onAddGoal: (goalText: string) => void;
  onCancel: () => void;
};

const GoalInput: FunctionComponent<Props> = ({
  isVisible,
  onAddGoal,
  onCancel,
}) => {
  const [goal, setGoal] = useState<string>("");

  const inputHandler = (enteredText: string) => {
    setGoal(enteredText);
  };

  const handleAddGoal = () => {
    onAddGoal(goal);
    setGoal("");
    onCancel();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          value={goal}
          onChangeText={inputHandler}
        />

        <View style={styles.actionsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    margin: 8,
    padding: 8,
  },
  actionsContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
