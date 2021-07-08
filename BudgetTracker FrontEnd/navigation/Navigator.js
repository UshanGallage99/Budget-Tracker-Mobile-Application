import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import AddIncome from '../components/AddIncome';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import LaunchScreen from '../components/LaunchScreen';



const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
             
           
            <Stack.Screen name='Login' component={Login} />
            {/* <Stack.Screen name='LaunchScreen' component={LaunchScreen} /> */}

            <Stack.Screen name='SignUp' component={SignUp} />
            
            <Stack.Screen name='Home' component={Home} />
            

            <Stack.Screen name='AddIncome' component={AddIncome} />
            

            <Stack.Screen name='AddExpense' component={AddExpense} />

        </Stack.Navigator>
    );
}