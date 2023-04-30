import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../../screens/home-page/HomePage';
import RecPage from '../../screens/home-page/RecPage';

const Home = createNativeStackNavigator();
export default HomeStack = () => {
    return(<Home.Navigator initialRouteName="Home">
        <Home.Screen name="Home" options={{headerShown:false}} component={HomePage}/>
        <Home.Screen name="Recommendations" component={RecPage}/>
    </Home.Navigator>);
}