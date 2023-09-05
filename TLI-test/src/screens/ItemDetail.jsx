import React, { useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Details from '../components/ItemDetail/Details';
import { Ionicons } from "@expo/vector-icons";

import { useRoute } from '@react-navigation/native';

const ItemDetail = ({navigation}) => {
    const data = useRoute();
    console.log(data);

  return (
      <View style={styles.container}>
        <Details data={data.params} navigation={navigation}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
})

export default ItemDetail;


