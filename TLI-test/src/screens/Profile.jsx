import React from "react";
import { SafeAreaView, StyleSheet, } from "react-native";
import ProfileData from '../components/Profile/ProfileData';
import { useRoute } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const data = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <ProfileData data={data.params} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile;


