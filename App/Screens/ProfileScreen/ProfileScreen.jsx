import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useUser, useAuth } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";

export default function ProfileScreen() {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
    },
  ];

  return (
    <View>
      <ScrollView>
        <View style={{ padding: 10, backgroundColor: Colors.PRIMARY }}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user.imageUrl }}
              width={70}
              height={70}
              style={{ borderRadius: 99 }}
            />
            <Text style={styles.name}>{user.fullName}</Text>
            <Text style={styles.email}>
              {user?.primaryEmailAddress.emailAddress}
            </Text>
          </View>
        </View>

        <View style={{ paddingTop: 50 }}>
          <FlatList
            data={profileMenu}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.profileMenu}>
                <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
                <Text style={styles.profileMenu_title}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity style={styles.profileMenu}>
            <Ionicons name="log-out" size={35} color={Colors.PRIMARY} />
            <Button
              title="Sign Out"
              onPress={() => {
                signOut();
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 30, fontFamily: "outfit-bold", color: Colors.WHITE },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  name: {
    fontSize: 26,
    fontFamily: "outfit-medium",
    color: Colors.WHITE,
    marginTop: 5,
  },
  email: {
    fontSize: 18,
    fontFamily: "outfit-medium",
    color: Colors.WHITE,
    marginTop: 5,
  },
  profileMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'center',
    paddingHorizontal: 80,
    gap: 5,
    marginBottom: 20,
  },
  profileMenu_title: {
    fontSize: 20,
    fontFamily: "outfit",
  },
});
