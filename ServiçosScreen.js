import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationBar from './NavigationBar'; // Import the NavigationBar component

const ServiçosScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar /> {/* Render the navigation bar here */}
      
      {/* Adicione mais serviços conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

});

export default ServiçosScreen;
