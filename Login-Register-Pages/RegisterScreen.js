import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
  // Lógica de registro aqui

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Registro</Text>
      {/* Campos de registro */}
      <Button
        title="Criar Conta"
        onPress={() => console.log("Botão de criar conta pressionado")}
        style={styles.createAccountButton} // Adicione o estilo ao botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  createAccountButton: {
    marginTop: 20, // Aumentei a margem para o botão "Criar Conta"
  },
});

export default RegisterScreen;
