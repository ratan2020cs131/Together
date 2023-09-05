import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Item from './Item';
import GlobalStyles from "../../GlobalStyles";


const Listing = ({navigation}) => {
    const [postData, setPostData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const Api = async () => {
        const option = {
            method: 'GET',
        }
    
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await result.json();
        console.log(data);
        setPostData(data);
        setLoaded(true);
    }

    useEffect(() => {
        Api();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={[GlobalStyles.boldText,styles.heading]}>Items</Text>
            {loaded?
            <FlatList
                    data={postData}
                    renderItem={({ item }) =>
                        <Item key={item.id}
                            title={item.title}
                            body={item.body}
                            item={item}
                            navigation={navigation}
                        />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={[styles.flatlist]}
                /> :
                <Text style={[GlobalStyles.boldText, {marginTop:80}]}>Loading...</Text>
            }
        </View>
      )

}

export default Listing;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'center',
    },
    heading:{
        color:'#fff',
        backgroundColor:'#1E1F22',
        width:'100%',
        textAlign:'center',
        paddingVertical:20,
        fontSize:20
    },
    flatlist:{
        paddingVertical:10,
        marginTop:10,
        marginBottom:65,
    }
})