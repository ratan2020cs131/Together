import React, { useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Text, } from "react-native";
import ProfileData from '../components/Profile/ProfileData';
import { Ionicons } from "@expo/vector-icons";

import { useRoute } from '@react-navigation/native';

const Profile = ({navigation}) => {
    const data = useRoute();
    console.log(data);

  return (
      <View style={styles.container}>
        <ProfileData data={data.params} navigation={navigation}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
})

export default Profile;


