import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

export default function Dashboard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  
  const [number, setNumber] = useState('');

  async function openOrder(){
    if (number === ''){
      return;
    }

    const response = await api.post('/order', {
      table: Number(number)
    })


    //Requisição para abrir mesa
    navigation.navigate('Order', {
      number: number,
      order_id: response.data.id
    })

    setNumber('');

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        placeholder="Número da mesa"
        placeholderTextColor='#8a8a8a'
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#13181d'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fcfcfc',
    marginBottom: 24
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#414a58',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#fcfcfc'
  },
  button: {
    width: '90%',
    height:40,
    backgroundColor: '#d8c79f',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#13181d',
    fontWeight: 'bold'
  }
})