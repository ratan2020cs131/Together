import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TextIcon = (props) => {
  return (
    <View style={styles.container}>
      <Text>Logged In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
})

export default TextIcon;
