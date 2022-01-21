import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { MarketInterface } from '../Actions/api';


const Coin = ({image, name, symbol, current_price, high_24h, low_24h}: MarketInterface) => {
  
  return (
    <View style={styles.container}>
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
  );
};

export default Coin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  low_price: {
    color: 'red',
  },
});
