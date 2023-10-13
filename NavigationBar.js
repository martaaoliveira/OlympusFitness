import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

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
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require("./assets/images/logo.png")}
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
    backgroundColor: "white",
    height: height * 0.1, // Use 10% of the screen height
    paddingHorizontal: width * 0.03, // Use 2% of the screen width
  },
  logoContainer: {
    flex: 1,
    marginLeft: width * 0.03, // Adjust margin using 2% of the screen width
  },
  logoText: {
    color: "white",
    fontSize: height * 0.02, // Adjust font size using 2.5% of the screen height
    fontWeight: "bold",
  },
  navItems: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    // Alter the style as needed
  },
  navText: {
    color: "pink",
    fontSize: height * 0.02, // Adjust font size using 2.2% of the screen height
  },
  activeNavText: {
    color: "pink",
    fontSize: height * 0.02,
  },
  logoImage: {
    width: width * 0.1, // Adjust image width using 20% of the screen width
    height: height * 0.08, // Adjust image height using 8% of the screen height
  },
});

export default NavigationBar;
