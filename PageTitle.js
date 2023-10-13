import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const PageTitle = ({ navigation }) => {
  const goToSobre = () => {
    navigation.navigate("Sobre");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.olympusText}>Olympus</Text>
      <Text style={styles.fitnessText}>Fitness</Text>
      <Text style={styles.subText}>Aqui, a disciplina é a chave para a imortalidade.</Text>
      <TouchableOpacity style={styles.startButton} onPress={goToSobre}>
        <Text style={styles.startText}>Venha conhecer a nossa equipa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: height * 0.3, // Use a percentage of the screen height
    marginLeft: height*-1.2,
  },
  olympusText: {
    fontSize: height * 0.1, // Use a percentage of the screen height
    fontWeight: "bold",
    color: "gold",
  },
  fitnessText: {
    fontSize: height * 0.09, // Use a percentage of the screen height
    fontWeight: "bold",
    color: "gold",
  },
  subText: {
    fontSize: height * 0.02, // Use a percentage of the screen height
    marginTop: height * 0.02, // Use a percentage of the screen height
    color: "white",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: height * 0.04, // Use a percentage of the screen height
  },
  startText: {
    color: "#fff",
    fontSize: height * 0.02, // Use a percentage of the screen height
    textAlign: "center",
  },
});

export default PageTitle;
