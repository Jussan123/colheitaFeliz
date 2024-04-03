import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../config/firebase";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getDoc } from "firebase/firestore";

const PlantingListScreen = () => {
  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    // Função para buscar os plantios do Firestore
    const fetchPlantings = async () => {
      try {
        const collection = getDoc(db, "plantings");
        const fetchedPlantings = getDoc(collection).map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Atualize o estado com os plantios obtidos do Firestore
        setPlantings(fetchedPlantings);
      } catch (error) {
        console.error("Erro ao buscar os plantios:", error);
        // Informe ao usuário sobre o erro ocorrido
        alert("Erro ao buscar os plantios. Por favor, tente novamente.");
      }
    };

    // Chame a função para buscar os plantios ao montar o componente
    fetchPlantings();
  }, []);

  // Renderize um item da lista de plantios
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.plantName}</Text>
      <Text>{item.plantingDate}</Text>
      <Text>{item.harvestDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Plantios</Text>
      {plantings.length ? (
        <FlatList
          data={plantings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhum plantio encontrado</Text>
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

export default PlantingListScreen;
