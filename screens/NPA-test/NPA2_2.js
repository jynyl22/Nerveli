import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const NPA2_2 = ({navigation}) =>{
    return(
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <View style = {styles.circle}>
                <Image style={styles.icon} source={require('../../assets/brand-mascot/elephantBase.png')}/>
                </View>
            <View style={styles.card}>
            <Text style ={{fontFamily: 'Lato',fontWeight:800,textAlign:'center',color:'#2B2B2B',marginTop:40,textAlignVertical: 'center'}}>Part 2:</Text>
            <Text style={styles.title}>Detection and Threshold Tests</Text>
                <Text style={styles.card_text}>There are a total of 5 test in this part. Each test will take about 2 minutes.</Text>
                <View style={styles.white_card}>
                <Text style ={styles.white_card_text}>Cold Detection Test</Text>
                <Text style ={styles.white_card_text}>Heat Detection Test</Text>
                <Text style ={styles.white_card_text}>Maximum Pressure Threshold</Text>
                <Text style ={styles.white_card_text}>Normal Pressure Threshold</Text>
                <Text style ={styles.white_card_text}>Light Touch Stimulus Test </Text>
                </View>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_3')}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    white_card:{
        marginHorizontal:20,
        height:324,
        marginTop:10,
        backgroundColor: 'white',
    },
    white_card_text:{
        marginTop:30,
        fontFamily: 'Open Sans',
        fontWeight: 700,
        fontSize: 20,
        color: '#2B2B2B',
        textAlign: 'center'
    },
    card_text:{
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 20,
        color: '#2B2B2B',
        paddingVertical: 20,
        textAlign: 'center',
    },
    title:{
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 25,
        textAlign: 'center',
        color: '#2B2B2B',
    },
    container:{
        justifyContent: 'center',
    },
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18,
        textAlign: 'center'
    },
    continuebutton:{
        marginTop:90,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    card:{
        width:'100%',
        height:720,
        marginTop:40,
        backgroundColor: '#EEF5ED',
    },
    icon:{
        marginTop:50,
        height: 120,
        width: 120,
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
});

export default NPA2_2