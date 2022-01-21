import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { markets } from '../Actions/api';
import { MarketInterface } from '../types/Main';

import Coin from '../Components/Coin';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [marketsData, setMarketsData] = React.useState<MarketInterface[]>([]);
  const [page, setPage] = React.useState(1);
  const flatListRef = useRef<FlatList>(null)

  useEffect(() => {
    setLoaded(false);
    const apiCall = async () => {
      const response = await markets(page);
      setMarketsData(response);
      setLoaded(true);
      flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
    }
    apiCall();
  }, [page]);

  const footerButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        {page > 1 ? (
          <View style={styles.previous}>
            <Button title="Previous Page" onPress={() => setPage(page - 1)} />
          </View>
        ) : null}
        <Button title="Next Page" onPress={() => setPage(page + 1)} />
      </View>
    )
};

  return (
      <View>
        {loaded ? (
            <FlatList
              ref={flatListRef}
              data={marketsData}
              renderItem={({ item }) => (<Coin {...item} />)}
              ListFooterComponent={footerButtons}
            />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  previous: {
    marginRight: 10,
  }
});
