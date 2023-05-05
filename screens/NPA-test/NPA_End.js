import React from 'react';
import { View,Text, Pressable,StyleSheet,Image, ScrollView, Platform } from 'react-native';
import Star_Rating from '../../components/star rating/star_rating';
const NPA_End = ({navigation}) =>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.hooray}>Hooray!</Text>
            <Image style={styles.confetti} source={require('../../assets/confetti/Confetti.png')}/>
            <Image style={styles.pic} source={require('../../assets/brand-mascot/elephantBase.png')}/>
            <Text style={{fontFamily:'Open Sans',fontWeight:'bold',color:'#2BB673',fontSize: 25,textAlign:'center',}}>You have successfully completed our NPA survey!</Text>
            <Text style={styles.basetext}>From here, we will generate the best recommendations for your pain based on the results</Text>
            <Star_Rating></Star_Rating>
            <Text style ={styles.ratetext}>Rate your experience with the survey</Text>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA_Results')}>
                <Text style = {styles.buttonfont}>View my results</Text>
            </Pressable>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ...Platform.select({
        android: {
            hooray: {
                fontFamily:'Open Sans',
                fontWeight:'bold',
                color:'#2BB673',
                fontSize: 25,
                textAlign:'center',
                marginTop:20,
            }
        },
        ios: {
            hooray: {
                fontFamily:'Open Sans',
                fontWeight:'bold',
                color:'#2BB673',
                fontSize: 25,
                textAlign:'center',
                marginTop:62,
            }
        }
    }),
    container:{
        marginHorizontal:30,
        justifyContent:'center',
        flexDirection:'column',
        alignContent: 'center',
    },
    confetti:{
        marginTop:20,
        height:340,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft:30,
    },
    titlefont:{
        fontFamily:'Open Sans',
        fontWeight:'bold',
        color:'#2BB673',
        fontSize: 25,
        textAlign:'center',
        marginTop:15,
    },
    pic:{
        position:'absolute',
        height:300,
        width:140,
        top:90,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    basetext:{
        fontFamily:'Open Sans',
        fontWeight:'700',
        textAlign:'center',
        fontSize:18,
        marginTop:10,
    },
    ratetext:{
        fontFamily:'Open Sans',
        fontWeight:'bold',
        fontSize: 16,
        textAlign:'center',
        color: '#2D6BC8',
        textDecorationLine: 'underline'
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        marginHorizontal:17,
        borderRadius: 20,
        marginTop:30,
        backgroundColor: '#2BB673',
    },
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18,
    },
});
export default NPA_End