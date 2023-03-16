import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Overview from './screens/NPA-test/Overview';
import NPA2 from './screens/NPA-test/NPA2';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
  <Stack.Navigator initialRouteName="NPA1" screenOptions={{title:"NERVELI",
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: "Lato-Bold",fontSize: 18, textAlign: 'center', color: 'black'},
  contentStyle: { backgroundColor: '#FFFFF' },
  }}>
    <Stack.Screen name = "Overview" component={Overview}/>
    <Stack.Screen name = "NPA2" component={NPA2}/>
  </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:55,
  },
});
export default App;
