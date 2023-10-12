import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ServiçosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Serviços</Text>
      <Text style={styles.service}>- Serviço 1: Descrição do serviço 1.</Text>
      <Text style={styles.service}>- Serviço 2: Descrição do serviço 2.</Text>
      <Text style={styles.service}>- Serviço 3: Descrição do serviço 3.</Text>
      {/* Adicione mais serviços conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  service: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ServiçosScreen;
