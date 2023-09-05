import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from '../../GlobalStyles';

const ProfileData = ({ data, navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={[GlobalStyles.boldText,styles.heading]}>Profile</Text>
            <View style={styles.profile}>
                <View style={styles.circle}>
                    <Ionicons name="person" size={30} />
                </View>
                <View style={{width: '70%',}}>
                    <Text style={[GlobalStyles.boldText, styles.text]}>{data.name}</Text>
                    <Text style={[GlobalStyles.normalText, styles.text]}>{data.email}</Text>
                </View>
            </View>
            <TouchableOpacity
            style={[GlobalStyles.button, styles.button]}
            onPress={()=>{navigation.navigate("Login")}}
          >
            <Text style={[GlobalStyles.boldText]}>LOGOUT</Text>
            <Ionicons name="log-out-outline" size={25}></Ionicons>
          </TouchableOpacity>
        </View>
    )
}

export default ProfileData;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },

    heading:{
        color:'#fff',
        backgroundColor:'#1E1F22',
        width:'100%',
        textAlign:'center',
        paddingVertical:20,
        fontSize:20
    },

    circle: {
        borderRadius: 100,
        backgroundColor: 'lightgrey',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize:18,
    },

    profile: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '100%', 
        alignItems:'center', 
        marginTop:30,
    },

    button: {
        marginTop:30,
        flexDirection:'row', 
        gap:5,
        width:'50%',
    }
})
