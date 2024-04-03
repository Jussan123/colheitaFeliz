import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const PlantingPlanScreen = () => {
  const [plantingPlan, setPlantingPlan] = useState([]);

  useEffect(() => {
    // Função para buscar o planejamento de plantio do Firestore
    const fetchPlantingPlan = async () => {
      try {
        
        const collection = doc(db, "plantingPlan");
        const response = await getDoc(collection);
        const fetchedPlantingPlan = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Atualize o estado com o planejamento de plantio obtido do Firestore
        setPlantingPlan(fetchedPlantingPlan);
      } catch (error) {
        console.error("Erro ao buscar o planejamento de plantio:", error);
        // Informe ao usuário sobre o erro ocorrido
        alert(
          "Erro ao buscar o planejamento de plantio. Por favor, tente novamente."
        );
      }
    };

    // Chame a função para buscar o planejamento de plantio ao montar o componente
    fetchPlantingPlan();
  }, []);

  // Renderize um item da lista de planejamento de plantio
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.plantName}</Text>
      <Text>{item.plantingDate}</Text>
      <Text>{item.plantQuantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planejamento de Plantio</Text>
      {plantingPlan.length ? (
        <FlatList
          data={plantingPlan}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhum planejamento de plantio encontrado</Text>
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

export default PlantingPlanScreen;
