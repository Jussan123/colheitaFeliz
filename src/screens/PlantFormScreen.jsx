import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PlantFormScreen = () => {
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [plantDescription, setPlantDescription] = useState('');

  const handleSubmit = () => {
    // Implemente a lógica para enviar os dados da planta para o Firebase ou outro serviço
    console.log('Nome da planta:', plantName);
    console.log('Tipo de planta:', plantType);
    console.log('Descrição da planta:', plantDescription);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Plantas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Planta"
        value={plantName}
        onChangeText={setPlantName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Planta"
        value={plantType}
        onChangeText={setPlantType}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição da Planta"
        multiline
        numberOfLines={4}
        value={plantDescription}
        onChangeText={setPlantDescription}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlantFormScreen;
