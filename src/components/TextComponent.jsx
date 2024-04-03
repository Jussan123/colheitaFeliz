import React from 'react';
import { Text } from 'react-native';
import styles from '../config/styles';

const TextComponent = ({ text }) => {
  return (
    <Text style={styles.text}>{text}</Text>
  );
};

export default TextComponent;
