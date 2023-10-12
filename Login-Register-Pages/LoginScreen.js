import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const goToRegister = () => {
    // Navegue para a página de criação de conta
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => console.log("Botão de login pressionado")} />
      <Text style={styles.createAccountText}>Não tem uma conta?</Text>
      <Button title="Criar Conta" onPress={goToRegister} />
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  createAccountText: {
    marginTop: 20, // Reduzi o espaçamento aqui
  },
  createAccountButton: {
    marginTop: 10, // Adicionei margem para o botão "Criar Conta"
  },
});

export default LoginScreen;
