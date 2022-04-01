import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import movies from '../mocks/movieList.json';

// step 5 and 7
const DetailsScreen = ({navigation, route}) => {
  const {movieId} = route.params;
  // step 8
  const movie = movies.results.filter(movie => movie.id === movieId)[0];
  const uriPrefix = 'https://image.tmdb.org/t/p/w500';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setIsLoading(false), 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return isLoading ? (
    <SafeAreaView style={{...styles.container, ...styles.center}}>
      <ActivityIndicator size={'large'} />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${uriPrefix}${movie.backdrop_path}`}}
      />
      <Text style={styles.title}>{movie.original_title}</Text>
      {/* <Text>Details Screen</Text> */}
      {/* <Text>MovieId: {JSON.stringify(movieId)}</Text> */}
      <View style={styles.rating}>
        <Text>Rating: </Text>
        <Text>{movie.vote_average} / 10</Text>
      </View>
      <Text style={{...styles.overviewHeader, ...styles.paddingHorizontal}}>
        Overview
      </Text>
      <Text style={{...styles.overview}}>{movie.overview}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    paddingHorizontal: 10,
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 20,
  },
  rating: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  overviewHeader: {
    marginBottom: 8,
    fontWeight: '500',
    fontSize: 18,
  },
  overview: {
    paddingHorizontal: 10,
  },
});

export default DetailsScreen;
