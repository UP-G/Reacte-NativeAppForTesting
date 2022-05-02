import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RegComp} from "../regUser/registration";
import {Auth} from "../authUser/auth";
import React from "react";

const Stack = createNativeStackNavigator();

function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Reg" component={RegComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Home;
