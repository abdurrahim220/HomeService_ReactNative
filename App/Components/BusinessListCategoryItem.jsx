import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { Entypo } from '@expo/vector-icons';
export default function BusinessListCategoryItem({ business }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />

      <View style={styles.containerDetails}>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16 }}
        >
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.BLACK,
            fontSize: 18,
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16 }}
        >
        <Entypo name="location" size={20} color={Colors.PRIMARY} />  {business?.address}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  containerDetails: {
    display: "flex",
    gap: 5,
  },
});
