import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native";
import PageTitle from "./PageTitle";
import ImageSlider from "./Components/ImageSlider";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component

const { width, height } = Dimensions.get('window');
const backgroundImage = require('./assets/images/background2.jpg'); // Replace with the path to your background image

const HomePage = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        {/* Reusing the Navbar component */}
        <NavigationBar title="Home"/>

        {/* Conteúdo da Página */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <PageTitle navigation={navigation} />
          {/* Add more content to exceed the screen height */}
          {/* Restante do conteúdo da página */}
          <View style={{ height: height * 0.38 }}> {/* Use uma porcentagem da altura do dispositivo */}
          </View>
        </ScrollView>

        {/* Conditionally render ImageSlider only on the HomePage */}
        {navigation.isFocused() && <ImageSlider navigation={navigation} />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: height * 1, // Usar uma porcentagem da altura do dispositivo
  },
  // contentContainer: {
  //   flexGrow: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default HomePage;
