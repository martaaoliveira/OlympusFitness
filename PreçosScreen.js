import React from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import NavigationBar from "./NavigationBar";

const yourNewImage = require("./assets/images/background_contactos.jpg");
const contactInfoBackground1 = require("./assets/images/osteopatia.jpg");
const contactInfoBackground2 = require("./assets/images/background_contactos.jpg");
const contactInfoBackground3 = require("./assets/images/background_contactos.jpg");
const contactInfoBackground4 = require("./assets/images/background_contactos.jpg");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const isPhone = screenWidth < 600; // Adjust this breakpoint based on your needs

const PreçosScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar title="Formulário" />

      <ImageBackground source={yourNewImage} style={{ ...styles.topImage, height: screenHeight * 0.3 }}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          {/* Your form content here */}
        </ScrollView>
      </ImageBackground>

      <View style={styles.contentBelowImage}>
        <View style={isPhone ? styles.contactInfoContainerPhone : styles.contactInfoContainer}>
          {renderContactInfo("1", "Osteopatia", "A partir de 50 euros por sessão!", contactInfoBackground1)}
          {renderContactInfo("2", "Treino Livre", "A partir de 40 euros por mês!", contactInfoBackground2)}
          {renderContactInfo("3", "Treino Personalizado", "A partir de 120 euros por mês!", contactInfoBackground3)}
          {renderContactInfo("4", "Plano de Nutrição", "A partir de 40 euros por sessão!", contactInfoBackground4)}
        </View>
      </View>
    </View>
  );
};

const renderContactInfo = (contactNumber, title, price, background) => {
  return (
    <View style={isPhone ? styles.contactInfoPhone : styles.contactInfo}>
      <ImageBackground source={background} style={styles.contactImage}>
        <View style={styles.overlay}>
          <Text style={styles.contactTitle}>{title}</Text>
          <Text style={styles.contactPrice}>{price}</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.buttonText}>Clique para mais informações</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topImage: {
    width: "100%",
    height: null,
    resizeMode: "cover",
    aspectRatio: 16 / 9,
  },
  contentBelowImage: {
    flex: 1,
    marginTop: 10,
  },
  formContainer: {
    paddingHorizontal: "5%",
    marginTop: 10,
  },
  contactInfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // For two or more items in a row
    justifyContent: "space-evenly", // To evenly space the items
  },
  contactInfoContainerPhone: {
    flexDirection: "column", // For one item per row on smaller screens
  },
  contactInfo: {
    borderRadius: 16,
    width: isPhone ? "90%" : "45%", // Adjust the width based on the screen size
    margin: isPhone ? 10 : 20, // Adjust the margin based on the screen size
  },
  contactInfoPhone: {
    borderRadius: 16,
    width: "90%",
    margin: 10,
  },
  contactImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  contactPrice: {
    fontSize: 16,
    color: "white",
  },
  learnMoreButton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});

export default PreçosScreen;
