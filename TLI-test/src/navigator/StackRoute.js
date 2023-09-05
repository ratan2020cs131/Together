import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/signup/Login';
import TabRoute from './TabRoute';

const Stack = createStackNavigator();

const StackRoute = () => {

    //routes array
    const routes = [
        {
            path:"Login",
            component: Login,
            option : { headerShown:false }
        },
        {
            path:"TabRoute",
            component: TabRoute,
            option : { headerShown:false }
        },
    ];


    return (
        <Stack.Navigator initialRouteName="Login">
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

export default StackRoute;
