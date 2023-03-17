import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Overview from './screens/NPA-test/Overview';
import NPA1_1 from './screens/NPA-test/NPA1_1';
import NPA1_2 from './screens/NPA-test/NPA1_2';
import NPA1_3 from './screens/NPA-test/NPA1_3';
import NPA1_4 from './screens/NPA-test/NPA1_4';
import NPA1_5 from './screens/NPA-test/NPA1_5';
import NPA1_6 from './screens/NPA-test/NPA1_6';
import NPA1_7 from './screens/NPA-test/NPA1_7';
import NPA1_8 from './screens/NPA-test/NPA1_8';
import NPA1_9 from './screens/NPA-test/NPA1_9';
import NPA1_10 from './screens/NPA-test/NPA1_10';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
  <Stack.Navigator initialRouteName="Overview" screenOptions={{title:"NERVELI",
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: "Lato-Bold",fontSize: 18, textAlign: 'center', color: 'black'},
  contentStyle: { backgroundColor: '#FFFFF' },
  }}>
    <Stack.Screen name = "Overview" component={Overview}/>
    <Stack.Screen name = "NPA1_1" component={NPA1_1}/>
    <Stack.Screen name = "NPA1_2" component={NPA1_2}/>
    <Stack.Screen name = "NPA1_3" component={NPA1_3}/>
    <Stack.Screen name = "NPA1_4" component={NPA1_4}/>
    <Stack.Screen name = "NPA1_5" component={NPA1_5}/>
    <Stack.Screen name = "NPA1_6" component={NPA1_6}/>
    <Stack.Screen name = "NPA1_7" component={NPA1_7}/>
    <Stack.Screen name = "NPA1_8" component={NPA1_8}/>
    <Stack.Screen name = "NPA1_9" component={NPA1_9}/>
    <Stack.Screen name = "NPA1_10" component={NPA1_10}/>

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
