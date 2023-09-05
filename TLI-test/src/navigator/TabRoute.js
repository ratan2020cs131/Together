import React from 'react';
import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // You may need to install this package
import Home from '../screens/Home';
const Tab = createBottomTabNavigator();


const TabRoute = () => {
    //routes array
    const routes = [
        {
            path: "Home",
            component: Home,
        },
    ];


    return (
        <Tab.Navigator
            initialRouteName="Home" // Set the initial tab
            screenOptions={{
                activeTintColor: 'blue', // Color of the active tab
                inactiveTintColor: 'gray', // Color of inactive tabs
                tabBarStyle: {
                    height: 55,
                },
                // headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            {
                routes.map((item) => (
                    <Tab.Screen
                        key={item.path}
                        name={item.path}
                        component={item.component}
                        options={({ }) => ({
                            tabBarLabel: ({ color, focused }) => (
                                <Text
                                    style={{
                                        color,
                                        fontSize: focused ? 14 : 12,
                                        transform: [{ translateY: -5 }],
                                        fontWeight: focused ? "500" : "400",
                                    }}
                                >
                                    {item.path}
                                </Text>
                            ),
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    {focused ?
                                        <Ionicons name="home" size={20} color="#4169E1"></Ionicons> :
                                        <Ionicons name="home-outline" size={20} color="grey"></Ionicons>
                                    }
                                </View>
                            ),
                        })}
                    />
                ))
            }
        </Tab.Navigator>
    )
}

export default TabRoute;
