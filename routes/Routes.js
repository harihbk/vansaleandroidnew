import React from 'react'
import Login from '../src/core/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (

    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>



  )
}
