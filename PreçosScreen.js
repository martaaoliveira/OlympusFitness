import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import NavigationBar from "./NavigationBar";

const yourNewImage = require("./assets/images/background_contactos.jpg");

const PreçosScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar title="Formulário" />

      <Image source={yourNewImage} style={styles.topImage} />
      <View style={styles.contentBelowImage}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          {/* Your form content here */}
        </ScrollView>
        <View style={styles.contactInfoContainer}>
          {renderContactInfo("1")}
          {renderContactInfo("2")}
          {renderContactInfo("3")}
          {renderContactInfo("4")}

        </View>
      </View>
    </View>
  );
};

const renderContactInfo = (contactNumber) => {
  return (
    <View style={styles.contactInfo}>
      <Text style={styles.contactTitle}>Os nossos Contactos {contactNumber}</Text>
      <Text><i className="fa fa-phone mr-2"></i> +91-9998887776</Text>
      <Text><i className="fa fa-envelope mr-2"></i> feedback@geeksforgeeks.org</Text>
      <Text><i className="fa-solid fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh</Text>
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
    height: 200,
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
    flexDirection: "column", // Display contactInfo side by side
    justifyContent: "space-between", // Add spacing between contactInfo
    paddingHorizontal: "5%",
    marginTop: "1%",
    flex: 18,
  },
  contactInfo: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    width: "60%", // 3 containers side by side with spacing
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactTitle: {
    fontSize: "2vw", // Responsive font size
    fontWeight: "bold",
    marginBottom: 20,
    color: "pink", // Custom text color
  },
});

export default PreçosScreen;
