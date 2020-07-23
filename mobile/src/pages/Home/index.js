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

            <Image source={imglogo} style={styles.imglogo}/>

        </View>

      

        <View style={styles.main}> 

          <Text style={styles.titulo}> Seu marketplace de coleta de resíduos </Text>

          <Text style={styles.descricao}> Ajudamos pessoas a encontrarem pontos  de coleta de forma eficiante</Text>

        </View>

      

      <View style={styles.caixabtn}>
        <TouchableOpacity
              onPress={() => {}}
              style={styles.link }>

                <Entypo  name="magnifying-glass" size={35} color="#fff" />
                <Text style={styles.btn}>
                Pesquisar pontos de coleta
                </Text>

        </TouchableOpacity>

      </View>

      <Image
        source={require('../../assets/home-background.svg')}
        style={styles.imgbackground}
        />

      </View>

    </View>
  );
}


