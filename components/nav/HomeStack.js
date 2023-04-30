import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../../screens/home-page/HomePage';
import RecPage from '../../screens/home-page/RecPage';

const Home = createNativeStackNavigator();
export default HomeStack = () => {
    return(<Home.Navigator initialRouteName="HomePage" screenOptions={{title:"NERVELI",
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitleStyle: {fontFamily: "Lato-Bold",fontSize: 18, textAlign: 'center', color: 'black'},
            contentStyle: { backgroundColor: '#FFFFF' },}}>
        <Home.Screen name="HomePage" options={{headerShown:false}} component={HomePage}/>
        <Home.Screen name="Recommendations" component={RecPage}/>
    </Home.Navigator>);
}