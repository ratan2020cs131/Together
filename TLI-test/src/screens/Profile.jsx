import React from "react";
import { View, StyleSheet, } from "react-native";
import ProfileData from '../components/Profile/ProfileData';
import { useRoute } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const data = useRoute();

  return (
    <View style={styles.container}>
      <ProfileData data={data.params} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile;


