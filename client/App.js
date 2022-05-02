import React, {Component} from "react";
import Home from "./src/components/homePage/home";
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


