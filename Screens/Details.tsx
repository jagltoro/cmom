import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../App';

import { details } from '../Actions/api';

type DetailsScreenProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenProp>();
  const id = route.params.id;

  const [loaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    const apiCall = async () => {
      const response = await details(id);
      setData(response);
      setLoaded(true);
    }
    apiCall();
  }, [id]);


  return (
    <View style={styles.container}>
      {loaded ? (
            <Text>DetailsScreen: {id}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
