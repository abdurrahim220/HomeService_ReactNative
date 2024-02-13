import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import BusinessList from "../BusinessList/BusinessList";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <Header/> */}
      <Header />
      {/* <Slider/> */}
      <View style={{ padding: 15 }}>
        <Slider />
        <Categories />
        <BusinessList />
      </View>
    </SafeAreaView>
  );
}
