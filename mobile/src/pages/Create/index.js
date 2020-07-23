import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
import MultiSelect from 'react-native-multiple-select';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.pagehome}>

        <TouchableOpacity
              onPress={() => {}}
              style={styles.linkcoleta }>
              
              <Entypo name="log-out" size={20} color="#2fb86e" />           
              <Text style={styles.btncoleta}>
              Voltar para Home
              </Text>
       </TouchableOpacity>

      <View style={styles.header}>

      <Image
        source={require('../../assets/logo.svg')}
        style={styles.imglogo}
      />

        <View style={styles.content}>

          <Text>Cadastro do ponto de coleta</Text>
          <Text>Dados da entidade</Text>

          <View style={styles.caixainput} >

            <TextInput
              style={styles.input}
              placeholder= 'Nome da entidade'
              value=""
              onChangeText=""/>
            

            <TextInput
              style={styles.input}
              placeholder= 'Endereço'
              value=""
              onChangeText=""/>
            

            <TextInput
              style={styles.input}
              placeholder= 'Numero/Complemento'
              value=""
              onChangeText=""/>

            <View>
              <MultiSelect
              />
            </View>
            
          </View>

        </View>

      </View>

    </View>
  );
}


