import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 for icons
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component

const SobreScreen = () => {
  // Funções para abrir os URLs ao pressionar os ícones
  const openInstagram = () => {
    Linking.openURL("https://www.instagram.com/"); // Substitua com o URL do Instagram
  };

  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/"); // Substitua com o URL do Facebook
  };

  const openGoogleMaps = () => {
    // Substitua a latitude e longitude pela localização do ginásio
    const latitude = "37.7749";
    const longitude = "-122.4194";
    const label = "Onde";
    const url = `https://www.google.com/maps?q=${latitude},${longitude}&label=${label}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Inclua a sua NavigationBar aqui */}
      <NavigationBar />

      {/* Icons on the left side */}
      <View style={styles.iconContainer}>
        {/* Instagram icon */}
        <TouchableOpacity style={styles.icon} onPress={openInstagram}>
          <FontAwesome5 name="instagram" size={24} color="#ff0000" />
        </TouchableOpacity>
        {/* Facebook icon */}
        <TouchableOpacity style={styles.icon} onPress={openFacebook}>
          <FontAwesome5 name="facebook" size={24} color="#1877f2" />
        </TouchableOpacity>
      </View>

      {/* Texto com a morada */}
      <View style={styles.textContainer}>
        <Text style={styles.moradaText1}>Onde estamos:</Text>
        <Text style={styles.moradaText2}>Rua bla bla </Text>
        <TouchableOpacity onPress={openGoogleMaps}>
          <Text style={styles.localizacaoText}>Ver no Mapa</Text>
        </TouchableOpacity>
      </View>

      {/* Rest of your content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Your content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  icon: {
    marginVertical: 5,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  moradaText1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  moradaText: {
    fontSize: 18,
  
  },
  localizacaoText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SobreScreen;
