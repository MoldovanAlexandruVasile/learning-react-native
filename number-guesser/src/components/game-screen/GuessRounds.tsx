import { FunctionComponent } from "react";
import { FlatList } from "react-native";
import RoundItem from "./RoundItem";

type Props = {
  rounds: number[];
};

const GuessRounds: FunctionComponent<Props> = ({ rounds }) => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      data={rounds}
      renderItem={({ item, index }) => <RoundItem round={index} guess={item} />}
      keyExtractor={(item) => `${item}`}
    />
  );
};

export default GuessRounds;
