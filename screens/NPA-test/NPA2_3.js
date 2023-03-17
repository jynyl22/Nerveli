import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const NPA2_3 = ({navigation}) =>{
    return(
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <View style = {styles.circle}>
                <Image style={styles.icon} source={require('../../assets/brand-mascot/elephantBase.png')}/>
                </View>
            <View style={styles.card}>
            <Text style={styles.title}>Time For The Cold Dectection Test</Text>
                <Text style={styles.card_text}>This test will ask you to conduct a test with materials to check your ablilty to feel the cold temperture.</Text>
                <View style={styles.white_card}>
                <Text style ={styles.white_card_text}>Silverware</Text>
                <Text style ={styles.white_card_text}>Icewater</Text>
                </View>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_4')}>
                <Text style = {styles.buttonfont}>Let’s get started!</Text>
            </Pressable>
            </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    white_card:{
        marginHorizontal:20,
        height:224,
        marginTop:10,
        backgroundColor: 'white',
    },
    white_card_text:{
        marginTop:40,
        marginBottom:30,
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
        marginTop:20,
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 25,
        textAlign: 'center',
        color: '#2B2B2B',
        marginHorizontal:50
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
        height:640,
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

export default NPA2_3