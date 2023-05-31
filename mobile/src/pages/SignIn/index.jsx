import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Food<Text style={styles.logo_house}>House</Text>
      </Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          placeholderTextColor='#8a8a8a'
        />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          placeholderTextColor='#8a8a8a'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13181d'
  },
  logo: {
    fontSize: 42,
    marginBottom: 18,
    color: '#d8c79f',
  },
  logo_house:{
    color: '#fcfcfc'
  },
  input_container: {
    width: '95%',
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical: 34,
    paddingHorizontal: 14,
    
  },
  input :{
    width: '95%',
    height: 40,
    backgroundColor: '#414a58',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#fcfcfc',
  },
  button: {
    width: '95%',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#d8c79f'
  },
  button_text:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#13181d',
  }
})