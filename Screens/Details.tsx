import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../App';

import { details } from '../Actions/api';
import { DetailsInterface } from '../types/Main';

type DetailsScreenProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenProp>();
  const id = route.params.id;

  const [loaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState<DetailsInterface>();

  useEffect(() => {
    const apiCall = async () => {
      const response = await details(id);
      setData(response);
      setLoaded(true);
    }
    apiCall();
  }, [id]);

  const numberFormat = (value: number) => {
    return '€ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const regex = /(<([^>]+)>)/ig;

  return (
    <View>
      {loaded ? (
        <>
          <View style={styles.container}>
            <View>
              <Text style={styles.code}>{data!.symbol}</Text>
              <Text>{data!.name}</Text>
              <Text>{`Hashing Algorithm : ${data!.hashing_algorithm}`}</Text>
              <Text>{`Market Cap: ${numberFormat(data!.market_data.market_cap.eur)}`}</Text>
              <Text>{`Started on: ${new Date(data!.genesis_date).toLocaleDateString()}`}</Text>
              <Text>{data!.links.homepage[0]}</Text>
            </View>
            <Image source={{ uri: data!.image.large }} style={styles.image} />
          </View>
          <View style={styles.description}>
            <Text>{data!.description.en.replace(regex, '')}</Text>
          </View>
        </>
        ) : (
          <Text>Loading...</Text>
        )}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  description: {
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
  }
});
