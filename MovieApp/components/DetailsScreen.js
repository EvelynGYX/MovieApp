import React from 'react';
import {SafeAreaView, Image, Text, StyleSheet} from 'react-native';

// step 5 and 7
const DetailsScreen = ({navigation, route}) => {
  const {movieId} = route.params;

  return (
    <SafeAreaView>
      <Image style={styles.image} />
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(movieId)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    marginBottom: 8,
  },
});

export default DetailsScreen;
