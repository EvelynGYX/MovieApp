/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return <DetailsScreen></DetailsScreen>;
};

export default App;
