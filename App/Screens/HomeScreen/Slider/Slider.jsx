import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../hooks/GlobalApi";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  console.log(slider);
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((res) => {
      //   console.log("res:", res.sliders);
      setSlider(res?.sliders);
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
        data={slider}
        horizontal={true}
        
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{marginRight:20}}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.imageSlider}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  imageSlider: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "cover",
  },
});
