import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView, Platform} from 'react-native';


const NPA2_15 = ({navigation}) =>{
    return(
        <ScrollView overScrollMode="never"style={{flex:1} }>
            <View style={styles.container}>
                <View style = {styles.circle}>
                <Image style={styles.icon} source={require('../../assets/brand-mascot/elephantBase.png')}/>
                </View>
            <View style={styles.card}>
            <Text style={styles.title}>Time For The Light Touch Stimulus Test</Text>
                <Text style={styles.card_text}>This test will ask you to conduct a test with materials to check your ablilty to feel the maximum amount of pressure.</Text>
                <View style={styles.white_card}>
                    <View style = {{flexDirection:'row',alignItems:'center',}}>
                        <View style = {styles.greencircle}>
                            <Text style = {styles.emoji}>🧻</Text>
                        </View>
                        <Text style = {styles.white_card_text}>Cotton ball or Q-tip</Text>
                    </View>
                </View>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_16')}>
                <Text style = {styles.buttonfont}>Let’s get started!</Text>
            </Pressable>
            </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ...Platform.select({
        android: {
            card:{
                width:'100%',
                marginTop:40,
                backgroundColor: '#EEF5ED',
            },
        },
        ios: {
            card:{
                width:'100%',
                marginTop:40,
                backgroundColor: '#EEF5ED',
                height: 700
            },
        }
    }),
    emoji:{
        fontWeight:'bold',
        color:'black',
        fontFamily:'Lato',
        textAlign:'center',
        fontSize:38
    },
    white_card:{
        marginHorizontal:20,
        paddingVertical:40,
        backgroundColor: 'white',
    },
    greencircle:{
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#2BB673',
        justifyContent:'center',
        marginLeft:20,
    },
    white_card_text:{
        fontFamily: 'Open Sans',
        fontWeight: 700,
        fontSize: 20,
        color: '#2B2B2B',
        paddingLeft:20
    },
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

export default NPA2_15