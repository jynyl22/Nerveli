import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomePage from './screens/home-page/HomePage';
import WelcomePage_1 from './screens/welcome-page/welcome_1';
import WelcomePage_2 from './screens/welcome-page/welcome_2';
import WelcomePage_3 from './screens/welcome-page/welcome_3';
import WelcomePage_4 from './screens/welcome-page/welcome_4';
import WelcomePage_5 from './screens/welcome-page/welcome_5';
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
import NPA2_1 from './screens/NPA-test/NPA2_1';
import NPA2_2 from './screens/NPA-test/NPA2_2';
import NPA2_3 from './screens/NPA-test/NPA2_3';
import NPA2_4 from './screens/NPA-test/NPA2_4';
import NPA2_5 from './screens/NPA-test/NPA2_5';
import NPA2_6 from './screens/NPA-test/NPA2_6';
import NPA2_7 from './screens/NPA-test/NPA2_7';
import NPA2_8 from './screens/NPA-test/NPA2_8';
import NPA2_9 from './screens/NPA-test/NPA2_9';
import NPA2_10 from './screens/NPA-test/NPA2_10';
import NPA2_11 from './screens/NPA-test/NPA2_11';
import NPA2_12 from './screens/NPA-test/NPA2_12';
import NPA2_13 from './screens/NPA-test/NPA2_13';
import NPA2_14 from './screens/NPA-test/NPA2_14';
import NPA2_15 from './screens/NPA-test/NPA2_15';
import NPA2_16 from './screens/NPA-test/NPA2_16';
import NPA2_17 from './screens/NPA-test/NPA2_17';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
  <Stack.Navigator initialRouteName="WelcomePage_1" screenOptions={{title:"NERVELI",
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: "Lato-Bold",fontSize: 18, textAlign: 'center', color: 'black'},
  contentStyle: { backgroundColor: '#FFFFF' },
  
  }}>
    <Stack.Screen name = "WelcomePage_1" component={WelcomePage_1}/>
    <Stack.Screen name = "WelcomePage_2" component={WelcomePage_2}/>
    <Stack.Screen name = "WelcomePage_3" component={WelcomePage_3}/>
    <Stack.Screen name = "WelcomePage_4" component={WelcomePage_4}/>
    <Stack.Screen name = "WelcomePage_5" component={WelcomePage_5}/>
    <Stack.Screen name = "HomePage" component={HomePage}/>
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
    <Stack.Screen name = "NPA2_1" component={NPA2_1}/>
    <Stack.Screen name = "NPA2_2" component={NPA2_2}/>
    <Stack.Screen name = "NPA2_3" component={NPA2_3}/>
    <Stack.Screen name = "NPA2_4" component={NPA2_4}/>
    <Stack.Screen name = "NPA2_5" component={NPA2_5}/>
    <Stack.Screen name = "NPA2_6" component={NPA2_6}/>
    <Stack.Screen name = "NPA2_7" component={NPA2_7}/>
    <Stack.Screen name = "NPA2_8" component={NPA2_8}/>
    <Stack.Screen name = "NPA2_9" component={NPA2_9}/>
    <Stack.Screen name = "NPA2_10" component={NPA2_10}/>
    <Stack.Screen name = "NPA2_11" component={NPA2_11}/>
    <Stack.Screen name = "NPA2_12" component={NPA2_12}/>
    <Stack.Screen name = "NPA2_13" component={NPA2_13}/>
    <Stack.Screen name = "NPA2_14" component={NPA2_14}/>
    <Stack.Screen name = "NPA2_15" component={NPA2_15}/>
    <Stack.Screen name = "NPA2_16" component={NPA2_16}/>
    <Stack.Screen name = "NPA2_17" component={NPA2_17}/>

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
