import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../Utils/Colors";
import Heading from "./Heading";

export default function BusinessDetailsCard({ business }) {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <View>
      <Heading text={"About me"} />
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
          fontSize: 16,
          lineHeight: 20,
        }}
        numberOfLines={showFullText ? 20 : 4}
      >
        {business?.about}
      </Text>

      <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.PRIMARY,
            fontSize: 16,
            lineHeight: 20,
          }}
        >
          {showFullText ? "Read Less" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
