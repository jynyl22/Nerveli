import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {WeatherPanel, RecPanels} from '../../components/buttons/rec_panel';

export default RecPage = ({navigation}) =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView overScrollMode="never" style = {styles.container}>
                <Text style = {styles.sectionText}>Today's recommendations</Text>
                <View>
                    <WeatherPanel data={weatherData}/>
                </View>
                <Text style = {[styles.sectionText, {fontWeight: 700}]}>Additional recommendations</Text>
                <View>
                    <RecPanels data = {recData}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const recData = [
    {
        id: 0,
        recommendation: 'Sleep Strategies',
        emoji: '😴',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus magna, convallis at justo quis, porta ultricies justo. Integer sit amet urna urna. Nam eget ipsum nec erat faucibus sodales.'
    },
    {
        id: 1,
        recommendation: 'Topicals',
        emoji: '🔥',
        description : 'Aliquam mauris enim, faucibus vel eros at, faucibus sodales magna. Etiam mollis arcu nec nisi venenatis, ac convallis metus tincidunt. Ut facilisis pellentesque nisi non blandit.'
    },
    {
        id: 2,
        recommendation: 'Activities',
        emoji: '🏐',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus magna, convallis at justo quis, porta ultricies justo. Integer sit amet urna urna. Nam eget ipsum nec erat faucibus sodales.'
    },
    {
        id: 3,
        recommendation: 'Mental Health',
        emoji: '🤗',
        description : 'Aliquam mauris enim, faucibus vel eros at, faucibus sodales magna. Etiam mollis arcu nec nisi venenatis, ac convallis metus tincidunt. Ut facilisis pellentesque nisi non blandit.'
    },
    {
        id: 4,
        recommendation: 'Temp Modification',
        emoji: '🤒',
        description : 'Aliquam mauris enim, faucibus vel eros at, faucibus sodales magna. Etiam mollis arcu nec nisi venenatis, ac convallis metus tincidunt. Ut facilisis pellentesque nisi non blandit.'
    },
]

const weatherData = {
    temp: '87°',
    weatherRec: 'Avoid sunny environments',
    icon: require('../../assets/weather-icons/sun.png'),
}

const styles = StyleSheet.create({
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        marginHorizontal:50,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    container:{
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    sectionText: {
      color:"black",
      fontFamily: 'Open Sans',
      textAlign: 'center',
      fontWeight: 800,
      fontSize: 20,
      marginRight:20,
      marginLeft:20,
      marginBottom:20
    },
  });