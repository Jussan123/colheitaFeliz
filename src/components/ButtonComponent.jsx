import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../config/styles';

const ButtonComponent = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
