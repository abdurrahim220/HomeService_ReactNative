import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function BackButton({title}) {
    const navigation = useNavigation();
  return (
  
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
          {title}
        </Text>
      </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({})