import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import movies from '../mocks/movieList.json';

// step 1 and 4 and 7
const HomeScreen = ({navigation}) => {
  const styles = homeScreenStyles;
  const moviesData = movies.results;
  const [title, setTitle] = useState('Popular Movies');

  const onPress = movieId => {
    navigation.navigate({
      name: 'Details',
      params: {
        movieId: movieId,
      },
    });
  };

  return (
    <SafeAreaView>
      {/* step 1 */}
      <Text style={styles.title}>{title}</Text>
      {/* step 2 */}
      {/* <MovieItem /> */}
      {/* step 3 */}
      <MovieList moviesData={moviesData} onPress={onPress} />
    </SafeAreaView>
  );
};

// step 3
const MovieList = props => {
  // const moviesData = movies.results;
  const {moviesData, onPress} = props;
  const uriPrefix = 'https://image.tmdb.org/t/p/w500';

  return (
    <FlatList
      data={moviesData}
      renderItem={({item}) => (
        <MovieItem
          id={item.id}
          uri={`${uriPrefix}${item.backdrop_path}`}
          title={item.title}
          onPress={onPress}
        />
      )}
    />
  );
};

// step 2
const MovieItem = props => {
  const styles = movieItemStyles;
  const {id, uri, title, onPress} = props;
  // const uri = `https://image.tmdb.org/t/p/w500${movies.results[0].backdrop_path}`;
  // const title = movies.results[0].title;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <Image style={styles.image} source={{uri: uri}} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const homeScreenStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 8,
    marginTop: 16,
    marginBottom: 8,
  },
});

const movieItemStyles = StyleSheet.create({
  container: {
    margin: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 5,
  },
  title: {
    padding: 5,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default HomeScreen;
