import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../GlobalStyles';


const Item = ({ body, title, navigation, item }) => {

    return (
        <TouchableOpacity onPress={() => { navigation.navigate("ItemDetail", item) }} style={styles.container}>
            <View style={[styles.details]}>
                <Text numberOfLines={2} lineBreakMode="tail" style={[GlobalStyles.boldText, { marginHorizontal: 15, flexWrap: 'wrap'}]}>{title}</Text>
                <Text numberOfLines={5} lineBreakMode="tail" style={[GlobalStyles.normalText, { marginHorizontal: 15, flexWrap: 'wrap'}]}>{body}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item;

const styles = StyleSheet.create({
    container: {
        width: 165,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical:5,
        height:180,
        backgroundColor: '#fff', 
        borderRadius:10,
        elevation:2,
    },

    details: { 
        paddingTop:20,
        width: "100%", 
        paddingBottom: 10, 
        gap:10,
    }

});
