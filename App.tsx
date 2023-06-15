import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import HomePage from "./src/pages/HomePages";
import { Button } from "react-native";
import DetailsPage from "./src/pages/DetailPage/DetailsPages";

export default function App() {

    const Stack = createNativeStackNavigator();



    return (

   

    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="DetailsPage" component={DetailsPage} />
            </Stack.Navigator>
        </NavigationContainer>
        

    );
}