import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/User/SignUp";
import SignIn from "./screens/User/SignIn";
import ChooseFrom from "./screens/Payment/ChooseFrom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ChooseFrom" component={ChooseFrom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
