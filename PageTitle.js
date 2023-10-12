import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
    marginTop: 350,
    marginLeft: -1300,
  },
  olympusText: {
    fontSize: 80,
    fontWeight: "bold",
    color: "gold",
  },
  fitnessText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "gold",
  },
  subText: {
    fontSize: 16,
    marginTop: 20,
    color: "white",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
  },
  startText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PageTitle;
