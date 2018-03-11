import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode='contain' style={styles.backgroundImage} source={require('./images/background.png')} />
    <Image resizeMode='contain' style={styles.logoImage} source={require('./images/logo.png')} />
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
