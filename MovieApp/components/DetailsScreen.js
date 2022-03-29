import React from 'react';
import {SafeAreaView, Image, Text, StyleSheet} from 'react-native';

// step 4
const DetailsScreen = () => {
  return (
    <SafeAreaView>
      <Image style={styles.image} />
      <Text>Details Screen</Text>
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
