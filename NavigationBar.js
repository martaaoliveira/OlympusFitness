import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const goToPreços = () => {
    navigation.navigate("Preços");
  };

  const goToSobre = () => {
    navigation.navigate("Sobre");
  };

  const goToServiços = () => {
    navigation.navigate("Serviços");
  };

  const goToFormulario = () => {
    navigation.navigate("Formulario");
  };

  const goToHome = () => {
    navigation.navigate("Olympus Fitness"); // Replace "Home" with the name of your home page route
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        {/* Use the Image component for your logo */}
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require("./assets/images/logo.png")} // Replace with the actual path to your logo image
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.navItems}>
        <TouchableOpacity style={styles.navItem} onPress={goToServiços}>
          <Text style={route.name === "Serviços" ? styles.activeNavText : styles.navText}>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={goToSobre}>
          <Text style={route.name === "Sobre" ? styles.activeNavText : styles.navText}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={goToPreços}>
          <Text style={route.name === "Preços" ? styles.activeNavText : styles.navText}>Preços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={goToFormulario}>
          <Text style={route.name === "Formulario" ? styles.activeNavText : styles.navText}>Contactos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white", // Set your desired background color
    height: 90,
    paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: "white", // Set your desired logo text color
    fontSize: 20,
    fontWeight: "bold",
  },
  navItems: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    // Altere o estilo conforme necessário
  },
  navText: {
    color: "black", // Set your desired nav item text color
    fontSize: 18,
  },
  activeNavText: {
    color: "pink", // Set the color for the active route
    fontSize: 18,
  },
  logoImage: {
    width: 150, // Set the width of your logo
    height: 80, // Set the height of your logo
  },
});

export default NavigationBar;
