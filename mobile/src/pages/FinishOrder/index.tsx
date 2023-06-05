import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}

type FinishRouteOrderProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder(){
  const route = useRoute<FinishRouteOrderProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put('/order/send', {
        order_id: route.params?.order_id
      })

      navigation.popToTop();

    } catch (error) {
      console.log('Erro ao finalizar, Tente mais tarde');
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>
        Você deseja finalizar este pedido?
      </Text>
      <Text style={styles.title}>
        Mesa {route.params?.number}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar Pedido</Text>
        <Feather  name="shopping-cart" size={20} color='#13181d'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#13181d',
    paddingVertical:'5%',
    paddingHorizontal: '4%',
    alignItems:'center',
    justifyContent: 'center'
  },
  alert:{
    fontSize: 20,
    color:'#fcfcfc',
    fontWeight: 'bold',
    marginBottom:12
  },
  title: {
    fontSize:30,
    fontWeight: 'bold',
    color: '#fcfcfc',
    marginBottom:12
  },
  button:{
    backgroundColor: '#d8c79f',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  textButton:{
    fontSize: 18,
    marginRight:8,
    fontWeight: 'bold',
    color: '#13181d'
  }
})