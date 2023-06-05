import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { CategoryProps, ProductProps } from '../../pages/Order';

interface ModalPickerProp {
  options: CategoryProps[] | ProductProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function ModalPicker({ handleCloseModal, options, selectedItem }: ModalPickerProp){

  function onPressItem(item: CategoryProps){
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
      <Text style={styles.item}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  ))

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: '#fcfcfc',
    borderWidth: 1,
    borderColor: '#8a8a8a',
    borderRadius: 4,
  },
  option:{
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#8a8a8a',
  },
  item: {
    margin: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#13181d'
  }
})