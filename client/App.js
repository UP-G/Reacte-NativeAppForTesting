import React, {Component} from "react";
import Home from "./src/components/homePage/home";
import {RegComp} from "./src/components/Router/routerRegistration";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {

    // state = {
    //
    // }
    return (
        <Home/>
    )
}

export default App;


