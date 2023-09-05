import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { Ionicons } from "@expo/vector-icons";


const Item = ({ data, navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={()=>{navigation.goBack()}}
                    style={{position:'absolute',left:10}}

                >
                    <Ionicons name="arrow-back-outline" size={30} color="#fff"/>
                </TouchableOpacity>
                <Text style={[GlobalStyles.boldText, styles.heading]}>Item Detail - {data.id}</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.circle}>
                    <Text style={[GlobalStyles.boldText]}>USER ID</Text>
                    <Text style={[GlobalStyles.boldText]}>{data.userId}</Text>
                </View>
                <Text style={[GlobalStyles.boldText, styles.title]}>{data.title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={[GlobalStyles.normalText, { textAlign: 'justify' }]}>{data.body}</Text>
            </View>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },

    header: { 
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent: 'center', 
        width:'100%', 
        backgroundColor: '#1E1F22',
    },

    heading: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 20
    },

    details: {
        paddingTop: 20,
        backgroundColor: '#fff',
        width: "100%",
        paddingBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        gap: 20,
    },

    circle: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        width: 210,
        textAlign: 'left',

    },

    body: {
        padding: 20,
    }

});
