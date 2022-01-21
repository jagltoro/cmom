import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MarketInterface } from '../types/Main';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailsScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Coin = ({id,image, name, symbol, current_price, high_24h, low_24h}: MarketInterface) => {
  const navigation = useNavigation<DetailsScreenProp>();
  return (
    <Pressable onPress={() => {
      navigation.navigate('Details', { id })
    }}
    style={({ pressed }) => 
      [{
        backgroundColor: pressed
          ? 'rgb(210, 230, 255)'
          : 'white'
      }, styles.container]
    }>
      <View style={styles.innerContainer}>
        <View>
          <View style={styles.description}>
            <Text style={styles.code}>{symbol}</Text>
            <Text>{name}</Text>
          </View>
          <Text style={styles.current_price}>{`€${current_price}`}</Text>
          <Text>
            Last 24hrs: 
            <Text style={styles.high_price}>{` ▲ €${high_24h}`}</Text>
            <Text style={styles.low_price}>{`  ▼ €${low_24h}`}</Text>
          </Text>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </Pressable>
  );
};

export default Coin;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: 10,
  },
  current_price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  high_price: {
    color: 'green',
  },
  image: {
    width: 50,
    height: 50,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  low_price: {
    color: 'red',
  },
});
