import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import TitleComponent from "../components/TitleComponent";
import TextComponent from "../components/TextComponent";

const BemVindoScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("./../../assets/logo.png")} style={styles.logo} />
      <TitleComponent title="Bem-vindo Ao Colheita Feliz!" />
      <TextComponent text="Seu app de controle de plantações" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default BemVindoScreen;
