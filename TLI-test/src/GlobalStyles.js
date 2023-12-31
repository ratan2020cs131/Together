import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    boldText: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
    },

    normalText: {
        fontFamily: "sans-serif",
        fontWeight:"normal",
    },

    logo: {
        marginTop: 40,
        height: 117,
        width: 208,
    },

    backgroundColor: {
        backgroundColor: '#1E1F22',
    },

    pText: {
        color: '#E9E5D7',
    },

    button: {
        backgroundColor: '#F55139',
        height: 45,
        width: "85%",
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#E9E5D7',
        borderRadius: 7,
        height: 45,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#E9E5D7',
        fontFamily: "sans-serif",
        fontWeight: "bold",
        letterSpacing:1,
    },
});

export default GlobalStyles;
