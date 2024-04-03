import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import { ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/plantacao.png')} style={styles.background}>
      <View style={styles.container}>
        <TitleComponent title="Bem-vindo à Tela Inicial" />
        <ButtonComponent
          title="Cadastro de Plantio"
          onPress={() => navigation.navigate('PlantingForm')}
        />
        <ButtonComponent
          title="Cadastro de Plantas"
          onPress={() => navigation.navigate('PlantForm')}
        />
        <ButtonComponent
          title="Lista de Plantas"
          onPress={() => navigation.navigate('PlantList')}
        />
        <ButtonComponent
          title="Lista de Plantios"
          onPress={() => navigation.navigate('PlantingList')}
        />
        <ButtonComponent
          title="Plano de Colheita"
          onPress={() => navigation.navigate('HarvestPlan')}
        />
        <ButtonComponent
          title="Plano de Plantio"
          onPress={() => navigation.navigate('PlantingPlan')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
