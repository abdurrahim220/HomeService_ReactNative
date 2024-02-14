import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.images} />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 13, fontFamily: "outfit-medium" }}>
          {business?.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "outfit",
            color: Colors.BLACK,
            marginBottom: 1,
            padding: 1,
          }}
        >
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "outfit",
            padding: 3,
            color: Colors.PRIMARY,
            backgroundColor: Colors.WHITE,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 2,
          }}
        >
          {business?.category.name}
        </Text>
        {/* <Text>{business?.email}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,

    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  images: {
    with: 160,
    height: 100,
    borderRadius: 10,
  },
});
