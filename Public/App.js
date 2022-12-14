import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"

import Home from "./screens/Home";
import ChooseFrom from "./screens/Payment/ChooseFrom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChooseFrom">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChooseFrom" component={ChooseFrom} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
