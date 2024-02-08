import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../hooks/GlobalApi";
import Heading from "../../../Components/Heading";
import Colors from "../../../Utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  // console.log(category);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategory().then((res) => {
      //   console.log("res:", res.sliders);
      setCategories(res?.categories);
    });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={"true"} />

      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconsContainer}>
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconsContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 15,
    borderRadius: 99,
  },
});
