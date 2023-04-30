import React from 'react';
import { View,Text,StyleSheet,Pressable, StatusBar, Image, ScrollView } from 'react-native';

var month = new Date().getMonth() + 1;
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

const Journal_1 = ({navigation}) =>{
    return(
        <ScrollView style = {styles.container}>
            
            <StatusBar
                barStyle='light-content'
            />
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Ready to journal, Jane?</Text>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_2')}>
                <Text style = {styles.buttonfont}>Log today's journal entry</Text>
            </Pressable>
            </View>
            <View style = {styles.container2}>
                <Text style = {styles.baseText}>This month's entries</Text>
                <Text style = {styles.seeMore}>See all</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 28}}>
                <View style = {styles.entryCard}>
                    <Text style = {styles.cardText}>SAT</Text>
                    <Text style = {{fontSize: 35}}>😴</Text>
                    <Text style = {styles.cardText}>11</Text>
                </View>
                <View style = {styles.entryCard}>
                    <Text style = {styles.cardText}>SUN</Text>
                    <Text style = {{fontSize: 35}}>😓</Text>
                    <Text style = {styles.cardText}>10</Text>
                </View>
                <View style = {styles.entryCard}>
                    <Text style = {styles.cardText}>MON</Text>
                    <Text style = {{fontSize: 35}}>☺️</Text>
                    <Text style = {styles.cardText}>09</Text>
                </View>
                <View style = {styles.entryCard}>
                    <Text style = {styles.cardText}>TUES</Text>
                    <Text style = {{fontSize: 35}}>🥳</Text>
                    <Text style = {styles.cardText}>08</Text>
                </View>
            </View>
            <View style = {{marginTop: 33, marginHorizontal: 28}}>
                <Text style = {styles.baseText}>This month's statistics</Text>
                <View style = {styles.statsCard}>
                    <View style = {{flexDirection: 'row'}}>
                        <Image style = {{width: 13.75, height: 20, marginTop: 28, marginLeft: 25.12}} source={require('../../assets/mood-emojis/bi_lightning-charge-fill.png')}></Image>
                        <Text style = {styles.statsText}>Average Pain Level</Text>
                    </View>
                    <Text style = {styles.statsPercentage}>50%</Text>
                    <Text style = {{fontWeight: 400, color: '#918d8d', marginLeft: 28, marginTop: 7}}>{monthName} {year}</Text>
                    <View>
                        <View style = {styles.statsBar1}></View>
                        <View style = {styles.statsBar2}></View>
                    </View>
                    <Text style = {{fontWeight: 400, color: '#918d8d', marginLeft: 28, marginTop: 108}}>Moderate</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18,
        fontWeight: '700'
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 372,
        height: 49,
        marginHorizontal:28,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    container:{
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        backgroundColor: '#2BB673',
        width: 428,
        height: 97
    },
    headerText: {
      color:"white",
      fontFamily: 'Lato',
      fontWeight: '800',
      fontSize: 24,
      textAlign: 'center',
      paddingTop: 37
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Lato',
        marginTop: 40,
        marginLeft: 28,
        marginRight: 28,
        justifyContent: 'space-between'
    },
    baseText: {
        fontWeight: 800,
    },
    seeMore: {
        color: '#31b877',
        fontWeight: 600,
    },
    entryCard: {
        width: 86,
        height: 115,
        borderRadius: 20,
        backgroundColor: '#2bb673',
        marginTop: 33,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 10,
    },
    cardText: {
        color: '#fff',
        fontFamily: 'Open Sans',
        fontWeight: '800',
        fontSize: 18,
    },
    statsCard: {
        marginTop: 33,
        backgroundColor: '#eef5ed',
        width: 372,
        height: 307,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 10,
        borderRadius: 20
    },
    statsText: {
        marginTop: 26,
        marginLeft: 9.12,
        fontWeight: 700,
        fontSize: 20,
        color: '#2b2b2b'
    },
    statsPercentage: {
        color: '#2bb673',
        fontSize: 50,
        fontWeight: 700,
        marginLeft: 26,
        marginTop: 9,
    },
    statsBar2: {
        position: 'absolute',
        backgroundColor: '#2bb673',
        width: 154,
        height: 28,
        borderRadius: 10,
        marginTop: 55,
        marginLeft: 26
    },
    statsBar1: {
        position: 'absolute',
        backgroundColor: '#c9ead4',
        width: 311.11,
        height: 28,
        borderRadius: 10,
        marginTop: 55,
        marginLeft: 32,
    },
    button:{
        marginTop: 26,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 10,
    },
  });

export default Journal_1;