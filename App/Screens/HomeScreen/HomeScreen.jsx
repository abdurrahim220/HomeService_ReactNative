import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import BusinessList from "../BusinessList/BusinessList";
import Colors from "../../Utils/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Header/> */}
        <Header />
        {/* <Slider/> */}
        <View style={{ padding: 15,backgroundColor:Colors.LIGHT_GRAY }}>
          <Slider />
          <Categories />
          <BusinessList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
