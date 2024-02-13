import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../hooks/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businessLists, setBusinessList] = useState([]);
  // console.log(category);
  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((res) => {
      //   console.log("res:", res.sliders);
      setBusinessList(res?.businessLists);
    });
  };

  return (
    <View style={{ marginTop: 15, }}>
      <Heading text={"Latest Business"} isViewAll={true} />

      <FlatList
        data={businessLists}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
