import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function BookingList({ business, booking }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: business?.images[0]?.url }}
            style={styles.image}
          />

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

            {booking?.id ? (
              <Text
                style={[
                  {
                    padding: 5,
                    borderRadius: 5,
                    fontSize: 14,
                    alignSelf: "flex-start",
                  },
                  booking?.bookingStatus === "Completed"
                    ? {
                        backgroundColor: Colors.LIGHT_GREEN,
                        color: Colors.GREEN,
                      }
                    : booking?.bookingStatus === "Canceled"
                    ? { backgroundColor: Colors.LIGHT_RED, color: Colors.RED }
                    : {
                        backgroundColor: Colors.PRIMARY_LIGHT,
                        color: Colors.PRIMARY,
                      },
                ]}
              >
                {booking?.bookingStatus}
              </Text>
            ) : null}

            <Text style={styles.date}>
              <AntDesign name="calendar" size={24} color="black" />
              {booking.date}
            </Text>
          </View>
        </View>
      </ScrollView>
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
  date: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    textAlign: "center",
  },
});
