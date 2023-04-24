import React from 'react';
import { View,Text,StyleSheet,Pressable, StatusBar, Image } from 'react-native';

var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var year = new Date().getFullYear();
var monthName;
switch(month) {
    case 1: monthName = 'January'; break;
    case 2: monthName = 'February'; break;
    case 3: monthName = 'March'; break;
    case 4: monthName = 'April'; break;
    case 5: monthName = 'May'; break;
    case 6: monthName = 'June'; break;
    case 7: monthName = 'July'; break;
    case 8: monthName = 'August'; break;
    case 9: monthName = 'September'; break;
    case 10: monthName = 'October'; break;
    case 11: monthName = 'November'; break;
    case 12: monthName = 'December'; break;
    default: monthName = 'invalid'
}

const Journal_9 = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <StatusBar
                barStyle='light-content'
            />
            <View style = {styles.header}>
                <Text style = {styles.headerText}>{monthName} {day}, {year}</Text>
            </View>
            <Text style = {[styles.subHeaderText, {marginTop: 33}]}>Your pain scale</Text>
            <Text style = {[styles.subHeaderText, {marginTop: 39}]}>Your moon</Text>
            <Text style = {[styles.subHeaderText, {marginTop: 38}]}>Your activities</Text>
            <Text style = {[styles.subHeaderText, {marginTop: 38}]}>Your medications</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        backgroundColor: '#2BB673',
        width: 428,
        height: 105,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
    },
    headerText: {
      color:"white",
      fontFamily: 'Lato',
      fontWeight: '700',
      fontSize: 24,
      textAlign: 'center',
      paddingTop: 32,
    },
    subHeaderText: {
        color: '#2b2b2b',
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 20,
        marginLeft: 28
    }
  });

export default Journal_9;