import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, CheckBox } from "react-native";
import NavigationBar from "./NavigationBar";
import { Linking } from "react-native";
const yourImage = require("./assets/images/espaço.jpg");
const yourNewImage = require("./assets/images/background_contactos.jpg");

const FormularioScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [isCheckbox1Checked, setCheckbox1Checked] = useState(false);

  const handleFormSubmit = () => {
    if (isCheckbox1Checked) {
      const message = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nText: ${text}`;
      const whatsappLink = `https://wa.me/911781175?text=${encodeURIComponent(message)}`;
  
      Linking.openURL(whatsappLink).catch((err) =>
        console.error('Failed to open WhatsApp:', err)
      );
    } else {
      console.log('Please agree to the terms to proceed.');
    }
  };

  return (
    <View style={styles.container}>
      <NavigationBar title="Formulário" />

      <Image source={yourNewImage} style={styles.topImage} />
      <View style={styles.contentBelowImage}>
        <Text style={styles.introText}>
          Qualquer dúvida que tenha sobre a OlympusFitness pode questionar preenchendo o seguinte formulário, ou nos contactar diretamente por um dos nossos meios indicados mais abaixo.
        </Text>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Número"
              onChangeText={(text) => setNumber(text)}
              value={number}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Texto"
              onChangeText={(text) => setText(text)}
              value={text}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isCheckbox1Checked}
                onValueChange={(value) => setCheckbox1Checked(value)}
              />
              <Text style={styles.checkboxLabel}>Concordo em receber outras comunicações da Olympo.
Para lhe fornecermos os conteúdos pedidos, precisamos de armazenar e processar os seus dados pessoais. Se consentir que armazenemos os seus dados pessoais para este fim clique na caixa.</Text>
            </View>
            <Button title="Enviar" onPress={handleFormSubmit} />
          </View>
        </ScrollView>
        <View style={styles.contactInfoContainer}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Os nossos Contactos</Text>
            <Text><i className="fa fa-phone mr-2"></i> +91-9998887776</Text>
            <Text><i className="fa fa-envelope mr-2"></i> geral.olympusfitness@gmail.com</Text>
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
  introText: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  contactInfoContainer: {
    flex: 16,
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

export default FormularioScreen;
