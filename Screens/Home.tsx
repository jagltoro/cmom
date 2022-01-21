import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { markets, MarketInterface } from '../Actions/api';

import Coin from '../Components/Coin';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [marketsData, setMarketsData] = React.useState<MarketInterface[]>([]);
  const [page, setPage] = React.useState(1);
  const flatListRef = useRef<FlatList>(null)

  useEffect(() => {
    const apiCall = async () => {
      const response = await markets(page);
      setMarketsData(response);
      setLoaded(true);
      flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
    }
    apiCall();
  }, [page]);

  return (
      <View style={styles.container}>
        {loaded ? (
            <FlatList
              ref={flatListRef}
              data={marketsData}
              renderItem={({ item }) => (<Coin {...item} />)}
              ListFooterComponent={<Button title="Next Page" onPress={() => setPage(page + 1)} />}
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
