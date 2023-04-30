import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const Overview = ({navigation}) =>{
    return(
        <ScrollView overScrollMode="never">
            <View style={styles.container}>
                    <View style = {styles.circle}>
                    <Image style={styles.icon} source={require('../../assets/brand-mascot/elephantBase.png')}/>
                    </View>
                <Text style={styles.title}>Time For The Nerveli Pain Assessment!</Text>
                <Text style={styles.subtitle}>The test is a 15 to 20 minute test, and will be conducted in two parts.</Text>
                <View style={styles.card}>
                    <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style = {styles.greencircle}>
                                <Text style = {styles.emoji}>📝</Text>
                            </View>
                            <Text style={styles.card_text}>First, we will do a survey of general questions about your pain.</Text>
                    </View>
                    <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style = {styles.greencircle}>
                                <Text style = {styles.emoji}>🔎️</Text>
                            </View>
                            <Text style={styles.card_text}>Then, we will introduce you to the Detection and Threshold tests. It's a series of 5 tests to help us understand what your pain type is.</Text>
                    </View>
                </View>
                <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_1')}>
                    <Text style = {styles.buttonfont}>Continue</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    emoji:{
        fontWeight:'bold',
        color:'black',
        fontFamily:'Lato',
        textAlign:'center',
        fontSize:38
    },
    greencircle:{
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#2BB673',
        justifyContent:'center',
        marginLeft:20,
    },
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18
    },
    continuebutton:{
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        marginHorizontal:20,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        marginHorizontal:20,
    },
     icon :{
         height: 100,
         width: 100,
         resizeMode: 'contain',
         alignSelf: 'center',
    },  
     circle: {
         width: 150,
         height: 150,
         borderRadius: 300/2,
         marginHorizontal: "25%",
         justifyContent: 'center',
         alignSelf: 'center',
     },
    title: {
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 25,
        textAlign: 'center',
        color: '#2B2B2B',
        marginTop: 40
    },
    subtitle: {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 20,
        textAlign: 'center',
        color: '#2B2B2B',
        marginTop: 20,
        marginBottom: 40
    },
    card: {
        backgroundColor: '#EEF5ED',//#EEF5ED
        width:"100%",
        paddingVertical:10,
        
    },
    card_text: {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 18,
        color: '#2B2B2B',
        paddingVertical: 10,
        flexWrap: 'wrap',
        flex:1,
        paddingLeft:10
    }

});

export default Overview