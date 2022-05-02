import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RegComp} from "../Router/routerRegistration";
import {Auth} from "../authUser/auth";
import React from "react";

const Stack = createNativeStackNavigator();

function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Auth} />
                <Stack.Screen name="Details" component={RegComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Home;
