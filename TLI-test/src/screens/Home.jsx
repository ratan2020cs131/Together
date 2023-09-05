import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, RefreshControl } from "react-native";
import Listing from '../components/Home/Listing';
import GlobalStyles from "../GlobalStyles";

const Home = ({ navigation }) => {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  }

  useEffect(() => {
    onRefresh();
  }, [])


  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.boldText, styles.heading]}>Items</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: '100%', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between', }}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
          />
        }
      >
        <Listing navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    width: '100%',
  },
  heading: {
    color: '#fff',
    backgroundColor: '#1E1F22',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20
  },
})

export default Home;


