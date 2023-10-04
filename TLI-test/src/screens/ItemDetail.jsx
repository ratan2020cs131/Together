import React, { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Details from '../components/ItemDetail/Details';
import { useRoute } from '@react-navigation/native';

const ItemDetail = ({ navigation }) => {
  const data = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <Details data={data.params} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ItemDetail;


