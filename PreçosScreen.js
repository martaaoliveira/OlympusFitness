import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, CheckBox } from "react-native";
import NavigationBar from "./NavigationBar";

const yourImage = require("./assets/images/espaço.jpg");
const yourNewImage = require("./assets/images/background_contactos.jpg");

const PreçosScreen = () => {


  return (
    <View style={styles.container}>
      <NavigationBar title="Formulário" />

      <Image source={yourNewImage} style={styles.topImage} />
      <View style={styles.contentBelowImage}>
        <ScrollView contentContainerStyle={styles.formContainer}>
        </ScrollView>
        <View style={styles.contactInfoContainer1}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Os nossos Contactos</Text>
            <Text><i className="fa fa-phone mr-2"></i> +91-9998887776</Text>
            <Text><i className="fa fa-envelope mr-2"></i> feedback@geeksforgeeks.org</Text>
            <Text><i className="fa-solid fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh</Text>
          </View>
        </View>
        <View style={styles.contactInfoContainer2}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Os nossos Contactos</Text>
            <Text><i className="fa fa-phone mr-2"></i> +91-9998887776</Text>
            <Text><i className="fa fa-envelope mr-2"></i> feedback@geeksforgeeks.org</Text>
            <Text><i className="fa-solid fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh</Text>
          </View>
        </View>
        <View style={styles.contactInfoContainer3}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Os nossos Contactos</Text>
            <Text><i className="fa fa-phone mr-2"></i> +91-9998887776</Text>
            <Text><i className="fa fa-envelope mr-2"></i> feedback@geeksforgeeks.org</Text>
            <Text><i className="fa-solid fa-map-pin mr-2"></i> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh</Text>
          </View>
        </View>
      </View>
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
    paddingHorizontal: 20,
    marginTop: 0,
  },
  contactInfoContainer1: {
    paddingHorizontal: 20,
    marginTop: 0,
    flex: 5,
  },
  contactInfoContainer2: {
    paddingHorizontal: 20,
    marginTop: 0,
    flex: 5,
  },
  contactInfoContainer3: {
    paddingHorizontal: 20,
    marginTop: 0,
    flex: 15,
  },
  contactInfo: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginRight: 10,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "text-blue-gray-900",
  },
});

export default PreçosScreen;
