import React from 'react';
import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import ItemStack from './ItemStack';
import { useRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();


const TabRoute = ({route}) => {
    const profileData = useRoute();
    //routes array
    const routes = [
        {
            path: "Home",
            component: ItemStack,
            activeIcon:'home',
            inactiveIcon:'home-outline',
            params: null,
        },
        {
            path: "Profile",
            component: Profile,
            activeIcon:'person',
            inactiveIcon:'person-outline',
            params: profileData.params,
        },
        
    ];


    return (
        <Tab.Navigator
            initialRouteName="Home" 
            screenOptions={{
                activeTintColor: 'blue', 
                inactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 55,
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            {
                routes.map((item) => (
                    <Tab.Screen
                        key={item.path}
                        name={item.path}
                        component={item.component}
                        initialParams={item.params}
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
                                        <Ionicons name={item.activeIcon} size={20} color="#4169E1"></Ionicons> :
                                        <Ionicons name={item.inactiveIcon} size={20} color="grey"></Ionicons>
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
