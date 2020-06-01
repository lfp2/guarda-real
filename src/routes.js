import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/Login";
import AutheticatedScreen from "./pages/Authenticated";
import HomeScreen from "./pages/Home";
import MetasScreen from "./pages/Metas";

const Stack = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FirstScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Autheticated" component={AutheticatedScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Metas" component={MetasScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}