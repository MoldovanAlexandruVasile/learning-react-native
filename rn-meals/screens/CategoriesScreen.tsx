import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../mocks/data.mock";
import CateogryTile from "../components/CategoryTile";
import { FunctionComponent } from "react";

const CategoriesScreen: FunctionComponent = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => <CateogryTile category={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
});

export default CategoriesScreen;
