import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const NPA2_1 = ({navigation}) =>{
    return(
            <View style={styles.container}>
                <View style = {styles.circle}>
                <Image style={styles.icon} source={require('../../assets/brand-mascot/elephantBase.png')}/>
                </View>
            <View style={styles.card}>
            <Text style ={{fontFamily: 'Lato',fontWeight:800,textAlign:'center',color:'#2B2B2B',marginTop:40,textAlignVertical: 'center'}}>Part 2:</Text>
            <Text style={styles.title}>Detection and Threshold Tests</Text>
                <Text style={styles.card_text}>Now, it’s time for the Detection and Threshold Tests. These tests allow us to determine and understand how your pain will affect your day-to-day lifestyle.</Text>
                <Text style ={{fontFamily: 'Open Sans',fontWeight: 400,fontSize: 20,color: '#2BB673',textAlign: 'center',textDecorationLine: 'underline',
}}>Information and FAQ</Text>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_2')}>
                <Text style = {styles.buttonfont}>Continue</Text>
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
        paddingHorizontal: 25,
        textAlign: 'center',
    },
    title:{
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 25,
        paddingHorizontal: 100,
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

export default NPA2_1