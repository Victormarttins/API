import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

import { Button } from "react-native";

import Table from "./src/pages/Table";

export default function App() {

    const Stack = createNativeStackNavigator();



    return (

   

    <NavigationContainer>
            <Stack.Navigator>
               
                <Stack.Screen name="Table" component={Table} />
            </Stack.Navigator>
        </NavigationContainer>
        

    );
}