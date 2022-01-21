import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DetailsScreenProps {}

const DetailsScreen = (props: DetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
