import { RouteProp, useRoute as useReactRoute } from "@react-navigation/native";
import { StackParamList } from "../types/navigation";

export const useRoute = <T extends keyof StackParamList>() => {
  const route = useReactRoute<RouteProp<StackParamList, T>>();

  return route;
};
