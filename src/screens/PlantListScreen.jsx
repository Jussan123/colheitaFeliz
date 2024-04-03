import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../config/firebase";
import { collection } from "firebase/firestore";

const PlantListScreen = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Função para buscar as plantas do Firestore
    const fetchPlants = async () => {
      try {
        const collection = getDoc(db, "plants")
        const fetchedPlants = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Atualize o estado com as plantas obtidas do Firestore
        setPlants(fetchedPlants);
      } catch (error) {
        console.error("Erro ao buscar as plantas:", error);
        // Informe ao usuário sobre o erro ocorrido
        alert("Erro ao buscar as plantas. Por favor, tente novamente.");
      }
    };

    // Chame a função para buscar as plantas ao montar o componente
    fetchPlants();
  }, []);

  // Renderize um item da lista de plantas
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.type}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Plantas</Text>
      {plants.length ? (
        <FlatList
          data={plants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhuma planta encontrada</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default PlantListScreen;
