import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetail from '../screens/ItemDetail';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const ItemStack = () => {

    //routes array
    const routes = [
        {
            path:"ItemDetail",
            component: ItemDetail,
            option : { headerShown:false }
        },
        {
            path:"HomeScreen",
            component: Home,
            option : { headerShown:false }
        },
    ];


    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            {
                routes.map((item)=>(
                    <Stack.Screen 
                    key={item.path}
                    name={item.path} 
                    component={item.component}
                    options={item.option}/>
                ))
            }
        </Stack.Navigator>
    )
}

export default ItemStack;
