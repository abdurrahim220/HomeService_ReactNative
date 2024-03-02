import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BusinessDetailsCard from "../../Components/BusinessDetailsCard";
import BusinessDetailsPhotos from "../../Components/BusinessDetailsPhotos";
import BookingModal from "../../Components/BookingModal";
export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);

  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  //   const toggleTextVisibility = () => {
  //     setShowFullText(!showFullText);
  //   };

  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        business?.email +
        "?subject=I am looking for your services&body=Hi There"
    );
  };

  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.images[0]?.url }}
          style={styles.image}
        />

        <View style={styles.containerDetails}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: Colors.BLACK,
              fontSize: 25,
            }}
          >
            {business?.name}
          </Text>

          <View style={styles.subDetails}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.PRIMARY,
                fontSize: 20,
              }}
            >
              {business?.contactPerson}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.PRIMARY,
                backgroundColor: Colors.PRIMARY_LIGHT,
                fontSize: 16,
                padding: 5,
                borderRadius: 5,
              }}
            >
              {business?.category.name}
            </Text>
          </View>

          <Text
            style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 17 }}
          >
            <Entypo name="location" size={20} color={Colors.PRIMARY} />{" "}
            {business?.address}
          </Text>

          {/* Horizontal Line */}
          <View
            style={{ borderWidth: 1, marginTop: 10, borderColor: Colors.GRAY }}
          ></View>

          {/* About section */}

          <BusinessDetailsCard business={business} />

          <View
            style={{ borderWidth: 1, marginTop: 10, borderColor: Colors.GRAY }}
          ></View>
          <BusinessDetailsPhotos />
        </View>
      </ScrollView>

      <View
        style={{ display: "flex", flexDirection: "row", gap: 5, margin: 5 }}
      >
        <TouchableOpacity
          style={styles.messageBtn}
          onPress={() => () => onMessageBtnClick()}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
              fontSize: 18,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      {/* booking modal on press book */}
      <Modal animationType="slide" visible={showModal}>
        <BookingModal
          businessId={business.id}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    // display: "flex",
    // flexDirection: "row",
    // gap: 15,
  },
  image: {
    width: "100%",
    height: 300,
    //   borderRadius: 15,
  },
  containerDetails: {
    display: "flex",
    gap: 7,
    // marginTop:10,
    padding: 15,
  },
  subDetails: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,

    padding: 10,
  },
  messageBtn: {
    padding: 10,
    backgroundColor: Colors.BLACK,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 99,
    flex: 1,
  },
  bookingBtn: {
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 99,
    flex: 1,
  },
});
