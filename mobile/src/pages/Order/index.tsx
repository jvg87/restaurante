import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { api } from '../../services/api';
import { ModalPicker } from '../../components/ModalPiker';

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  }
}

export type CategoryProps = {
  id: string;
  name: string;
}

type OrderRouteProp = RouteProp<RouteDetailParams, 'Order'>;

export default function Order(){
  const route = useRoute<OrderRouteProp>();
  const navigation = useNavigation();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

  const [amount, setAmount] = useState('1');

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('/category');  

      setCategory(response.data);
      setCategorySelected(response.data[0])
    }

    loadInfo();

  }, [])

  async function handleCloseOrder() {
    try {
      await api.delete('/order', {
        params: {
          order_id: route.params?.order_id
        }
      })

      navigation.goBack();

    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCategory(item: CategoryProps){
    setCategorySelected(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity onPress={handleCloseOrder}>
          <Feather name='trash-2' size={28} color='#ff3f4b'/>
        </TouchableOpacity>
      </View>

      {category.length !== 0 && (
        <TouchableOpacity style={styles.input} onPress={() => setModalCategoryVisible(true)}>
          <Text style={{color: '#fff'}}>
            {categorySelected?.name}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.input}>
        <Text style={{color: '#fff'}}>Pizza de calabresa</Text>
      </TouchableOpacity>
      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidades</Text>
        <TextInput
          style={[styles.input, { width: '60%', textAlign: 'center' }]}
          placeholderTextColor='#8a8a8a'
          keyboardType='numeric'
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

        <Modal
          transparent={true}
          visible={modalCategoryVisible}
          animationType='fade'
        >
          <ModalPicker
            handleCloseModal={ () => setModalCategoryVisible(false)}
            options={category}
            selectedItem={ handleChangeCategory }
          />
        </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13181d',
    paddingVertical: '5%',
    paddingEnd: '4%',
    paddingStart: '4%'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fcfcfc',
    marginRight: 14
  },
  input: {
    backgroundColor: '#414a58',
    borderRadius: 4,
    width: '100%',
    height: 40,
    marginBottom: 24,
    justifyContent: 'center',
    paddingHorizontal: 8,
    color: '#fcfcfc',
    fontSize: 20
  },
  qtdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  qtdText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fcfcfc'
  },
  actions: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  buttonAdd: {
    backgroundColor:'#3fffa3',
    borderRadius: 4,
    height: 40,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#13181d',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: '#d8c79f',
    borderRadius: 4,
    height: 40,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center'

  }
})

