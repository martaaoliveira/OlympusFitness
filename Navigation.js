import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import LoginScreen from "./LoginScreen";
import PrecosScreen from "./PrecosScreen";
import SobreScreen from "./SobreScreen";
import EquipaScreen from "./EquipaScreen";
import RegisterScreen from "./RegisterScreen"; // Importe a página de registro

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Precos" component={PrecosScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="Equipa" component={EquipaScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
