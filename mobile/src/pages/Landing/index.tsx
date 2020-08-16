import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import LandingImg from '../../assets/images/landing.png';
const Landing = () => {
  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}> O que deseja fazer?</Text>
      </Text>
    </View>
  );
};

export default Landing;
