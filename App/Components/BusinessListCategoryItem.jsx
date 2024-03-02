import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function BusinessListCategoryItem({ business, booking }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("business-detail", { business: business })}
    >
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
          <Entypo name="location" size={20} color={Colors.PRIMARY} />
          {business?.address}
        </Text>
        {booking?.id ? <Text>Show Booking</Text> : null}
      </View>
    </TouchableOpacity>
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
