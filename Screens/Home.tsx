import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { markets, MarketInterface } from '../Actions/api';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [marketsData, setMarketsData] = React.useState<MarketInterface[]>([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await markets();
      setMarketsData(response);
      setLoaded(true);
    }
    apiCall();
  }, []);

  return (
    <View style={styles.container}>
      {loaded ? (
        <FlatList
          data={marketsData}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
