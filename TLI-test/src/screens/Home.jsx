import React, { useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Listing from '../components/Home/Listing';

const Home = ({navigation}) => {



  return (
      <View style={styles.container}>
        <Listing navigation={navigation} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
})

export default Home;


