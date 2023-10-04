import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, RefreshControl, View } from "react-native";
import Listing from '../components/Home/Listing';
import GlobalStyles from "../GlobalStyles";
import Api from '../api/Api';

const Home = ({ navigation }) => {
  const [postData, setPostData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [errLoad, setErrLoad] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [refresh, setRefresh] = useState(true);

  const onRefresh = () => {
    setPostData([]);
    setLoaded(false);
    setTotalPage(1);

    Api.then((data) => {
      setPostData(data);
      setTotalPage(Math.ceil(data.length / 6))
      setLoaded(true);
      setRefresh(false);
    }).catch((err) => {
      setErrLoad(true);
    });
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
        <Listing navigation={navigation} postData={postData} loaded={loaded} errLoad={errLoad} totalPage={totalPage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


