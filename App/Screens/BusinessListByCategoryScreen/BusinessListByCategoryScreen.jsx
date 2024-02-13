import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import GlobalApi from "../../hooks/GlobalApi";
import BusinessListCategoryItem from "../../Components/BusinessListCategoryItem";
import Colors from "../../Utils/Colors";
export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;

  const [businessLists, setBusinessList] = useState([]);
  // console.log(param)
  const navigation = useNavigation();

  useEffect(() => {
    param && getBusinessListByCategoryScreen();
  }, [param]);

  const getBusinessListByCategoryScreen = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((res) => {
      // console.log(res.businessLists);
      setBusinessList(res.businessLists);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param.category}
        </Text>
      </TouchableOpacity>

      {businessLists?.length > 0 ? (
        <FlatList
          style={{ marginTop: 10 }}
          data={businessLists}
          renderItem={({ item, index }) => (
            <BusinessListCategoryItem key={index} business={item} />
          )}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            marginTop: "20%",
            color: Colors.GRAY,
            textAlign: "center",
          }}
        >
          No Business List Found
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingTop: 25,
  },
});
