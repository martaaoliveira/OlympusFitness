import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import PreçosScreen from "./PreçosScreen";
import SobreScreen from "./SobreScreen";
import LoginScreen from "./Login-Register-Pages/LoginScreen";
import ServiçosScreen from "./ServiçosScreen";
import RegisterScreen from "./Login-Register-Pages/RegisterScreen";
import FormularioScreen from "./FormularioScreen";

const Stack = createStackNavigator();

const App = () => {
  
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Olympus Fitness" component={HomePage} />
          <Stack.Screen name="Preços" component={PreçosScreen} />
          <Stack.Screen name="Sobre" component={SobreScreen} />
          <Stack.Screen name="Serviços" component={ServiçosScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Formulario" component={FormularioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
