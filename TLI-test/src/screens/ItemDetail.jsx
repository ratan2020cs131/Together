import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Details from '../components/ItemDetail/Details';
import { useRoute } from '@react-navigation/native';

const ItemDetail = ({ navigation }) => {
  const data = useRoute();

  return (
    <View style={styles.container}>
      <Details data={data.params} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ItemDetail;


