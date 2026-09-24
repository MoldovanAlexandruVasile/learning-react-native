import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation as useReactNavigation } from "@react-navigation/native";
import { StackParamList } from "../types/navigation";

export const useNavigation = () => {
  const navigation =
    useReactNavigation<NativeStackNavigationProp<StackParamList>>();

  return navigation;
};
