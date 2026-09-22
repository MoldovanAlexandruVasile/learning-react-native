import { type FunctionComponent } from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

type Props = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

const Input: FunctionComponent<Props> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      maxLength={2}
      keyboardType="numeric"
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.ACCENT500,
    borderBottomWidth: 2,
    color: COLORS.ACCENT500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Input;
