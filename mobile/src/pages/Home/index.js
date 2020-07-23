import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  function navigateToCreate(){
    navigation.navigate('Create');
  }
  return (
    <View style={styles.pagehome}>

        <TouchableOpacity
              onPress={navigateToCreate}
              style={styles.linkcoleta }>
              
              <Entypo name="login" size={24} color="#2fb86e" />           
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

        </View>

        <View style={styles.main}> 

          <Text style={styles.titulo}> Seu marketplace de coleta de resíduos </Text>

          <Text style={styles.descricao}> Ajudamos pessoas a encontrarem pontos  de coleta de forma eficiante</Text>

        </View>

      <View style={styles.caixainput} >
      <Entypo name="magnifying-glass" size={35} color="#fff"/>
        <TextInput
          onPress={() => {}}
          style={styles.input}
          placeholderTextColor="#fff"
          placeholder= 'Nome da Cidade'
          value=""
          onChangeText="">
        </TextInput>
      </View>
      <Text style={styles.info}>
        Procure pontos de coleta</Text>

      <Image
        source={require('../../assets/home-background.svg')}
        style={styles.imgbackground}
        />

      </View>

    </View>
  );
}


