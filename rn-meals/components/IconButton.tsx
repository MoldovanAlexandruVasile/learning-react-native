import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FunctionComponent } from "react";

type Props = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  onPress: () => void;
};

const IconButton: FunctionComponent<Props> = ({
  name,
  onPress,
  size = 24,
  color = "white",
}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
