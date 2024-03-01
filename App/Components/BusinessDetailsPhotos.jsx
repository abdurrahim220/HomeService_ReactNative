import { View, FlatList, Image } from "react-native";
import React from "react";
import Heading from "./Heading";

export default function BusinessDetailsPhotos({ business }) {
  return (
    <View>
      <Heading text={"Photos"} />
      <FlatList
        data={business?.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width: "100%", height: 120, flex: 1 ,margin:5}}
          />
        )}
      />
    </View>
  );
}
