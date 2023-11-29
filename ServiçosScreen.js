import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NavigationBar from './NavigationBar'; // Import the NavigationBar component

const ServiçosScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar /> {/* Render the navigation bar here */}
      
      {/* First Section */}
      <View style={styles.section}>
        <Image source={require('./assets/images/osteopatia.jpg')} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text>Texto a descrever serviço1</Text>
          </View>
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text>Texto a descrever serviço2</Text>
          </View>
        </View>
        <Image source={require('./assets/images/osteopatia.jpg')} style={styles.image} />
      </View>

      {/* Third Section */}
      <View style={styles.section}>
        <Image source={require('./assets/images/osteopatia.jpg')} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text>Texto a descrever serviço3</Text>
          </View>
        </View>
      </View>

      {/* Fourth Section */}
      <View style={styles.section}>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text>Texto a descrever serviço4</Text>
          </View>
        </View>
        <Image source={require('./assets/images/osteopatia.jpg')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 2, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
  },
  contentContainer: {
    maxWidth: "80%",
  },
});

export default ServiçosScreen;
