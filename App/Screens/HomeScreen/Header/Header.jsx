import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../../Utils/Colors";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <SafeAreaView style={styles.container}>
        {/* Profile Container */}
        <View style={styles.viewContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: Colors.WHITE,fontFamily: "outfit", }}>Welcome,</Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontFamily: "outfit-medium",
                }}
              >
                {user.fullName}
              </Text>
            </View>
          </View>
          <View>
            <FontAwesome name="bookmark" size={28} color="white" />
          </View>
        </View>

        {/* Search Bar section */}

        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome
            style={styles.searchBtn}
            name="search"
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 5,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    width: "85%",
    fontSize: 16,
    fontFamily:"outfit"
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
});
