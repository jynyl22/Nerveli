import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const NPA2_10 = ({navigation}) =>{
    return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.icon} source={require('../../assets/video-images/Pressure.png')}/>
                </View>
            <View style={styles.card}>
            <Text style={styles.title}>Normal Pressure Threshold</Text>
                <Text style={styles.card_text}>Watch how to perform the normal pressure threshold or visit the full video.</Text>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_11')}>
                <Text style = {styles.buttonfont}>Next</Text>
            </Pressable>
            </View>
            </View>
    );
};

const styles = StyleSheet.create({
    card_text:{
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 20,
        color: '#2B2B2B',
        paddingVertical: 20,
        paddingHorizontal: 65,
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
        height:580,
        //marginTop:40,
        backgroundColor: '#EEF5ED',
    },
    icon:{
        marginTop:50,
        //height: 120,
        width: "80%",
        resizeMode: 'contain',
        alignSelf: 'center',
   },  
    
});

export default NPA2_10