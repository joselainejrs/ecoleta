import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import imglogo from '../../assets/logo.svg';
// import imghome from '../../assets/home-background.svg';

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';


export default function Home() {
  return (
    <View style={styles.pagehome}>

        <TouchableOpacity
              onPress={() => {}}
              style={styles.linkcoleta }>
              
              <Entypo name="login" size={20} color="#2fb86e" />           
              <Text style={styles.btncoleta}>
              Cadastre um ponto de coleta
              </Text>
       </TouchableOpacity>

      <View style={styles.content}>

        <View style={styles.header}>

        <Image
        source={require('../../assets/logo.svg')}
        style={styles.imglogo}
        />

        <Text></Text>
        </View>

      </View>

    </View>
  );
}


