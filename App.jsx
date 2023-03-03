/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import NPA1 from './screens/NPA1';
import NPA2 from './screens/NPA2';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
  <Stack.Navigator initialRouteName="NPA1">
    <Stack.Screen name = "NPA1" component={NPA1}/>
    <Stack.Screen name = "NPA2" component={NPA2}/>
  </Stack.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default App;
