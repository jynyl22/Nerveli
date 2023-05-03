import React from 'react';
import { View,Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';

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

const painType = 'minimal'
const interference = 'does not interfere with daily activities'
const mood = ['😴  Tired', '😌  Calm']
const activities = ['🏠  Household chores', '🥾  Hiking']
const medication = '🙅  Not today'

const Journal_9 = ({navigation}) =>{

    return(
        <ScrollView style = {styles.container} overScrollMode='never'>

            <StatusBar
                barStyle='light-content'
            />
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style = {{marginTop:20,marginLeft:25,}}source={require('../../assets/journal/back.png')}></Image >
                </TouchableOpacity>
                <Text style = {{marginTop:20, color:"white", fontFamily: 'Lato', fontWeight: '700', fontSize: 20, alignSelf: 'center', position:'absolute'}}>NERVELI</Text>
                <Text style = {styles.headerText}>{monthName} {day}, {year}</Text>
            </View>
            <Text style = {[styles.subHeaderText, {marginTop: 33, marginLeft: 28}]}>Your pain scale</Text>
            <View style = {styles.bubble}>
                <Text style = {styles.bubbleText}>Your pain was {painType} and {interference}.</Text>
            </View>
            <View style = {styles.subHeader}>
                <Text style = {[styles.subHeaderText, {marginTop: 1}]}>Your mood</Text>
                    <View style = {{flexDirection: 'row'}}>
                    <Image style = {{width: 15, height: 14.23}} source={require('../../assets/mood-emojis/edit.png')}></Image>
                    <Text style = {styles.editText}>Edit</Text>
                    </View>
            </View>
            <View style = {styles.subBubble}>
                <Text style = {styles.subBubbleText}>{mood[0]}</Text>
            </View>
            <View style = {styles.subBubble}>
                <Text style = {styles.subBubbleText}>{mood[1]}</Text>
            </View>

            <View style = {styles.subHeader}>
                <Text style = {[styles.subHeaderText, {marginTop: 1}]}>Your activities</Text>
                    <View style = {{flexDirection: 'row'}}>
                    <Image style = {{width: 15, height: 14.23}} source={require('../../assets/mood-emojis/edit.png')}></Image>
                    <Text style = {styles.editText}>Edit</Text>
                    </View>
            </View>
            <View style = {styles.subBubble}>
                <Text style = {styles.subBubbleText}>{activities[0]}</Text>
            </View>
            <View style = {styles.subBubble}>
                <Text style = {styles.subBubbleText}>{activities[1]}</Text>
            </View>

            <View style = {styles.subHeader}>
                <Text style = {[styles.subHeaderText, {marginTop: 1}]}>Your medications</Text>
                    <View style = {{flexDirection: 'row'}}>
                    <Image style = {{width: 15, height: 14.23}} source={require('../../assets/mood-emojis/edit.png')}></Image>
                    <Text style = {styles.editText}>Edit</Text>
                    </View>
            </View>
            <View style = {styles.subBubble}>
                <Text style = {styles.subBubbleText}>{medication}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    banner: {
        backgroundColor: '#2BB673',
        width: 428,
        height: 79,
    },
    header: {
        backgroundColor: '#2BB673',
        width:'100%',
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
      paddingBottom: 45
    },
    subHeader: {
        flexDirection: 'row',
        marginTop: 38,
        justifyContent: 'space-between',
        marginLeft: 28,
        marginRight: 30
    },
    subHeaderText: {
        color: '#2b2b2b',
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 20,
    },
    bubble: {
        height: 119,
        marginTop: 21,
        marginHorizontal: 28,
        backgroundColor: '#eef5ed',
        justifyContent: 'center',
        borderRadius: 20
    },
    bubbleText: {
        color: '#2b2b2b',
        fontFamily: 'Open Sans',
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 25,
        marginRight: 29,
    },
    editText: {
        // fontFamily: 'Raleway',
        fontWeight: 600,
        fontSize: 16,
        color: '#31b877',
        marginLeft: 8
    },
    subBubble: {
        marginHorizontal: 28,
        height: 60,
        backgroundColor: '#eef5ed',
        marginTop: 23,
        borderRadius: 20,
        justifyContent: 'center'
    },
    subBubbleText: {
        marginLeft: 14,
        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontSize: 18,
        color: '#2b2b2b'
    }
  });

export default Journal_9;