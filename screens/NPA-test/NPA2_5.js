import React from 'react';
import { View,Text, Pressable,StyleSheet } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const NPA2_5 = ({navigation}) =>{
    const data = [
        {value: "I did not experience a cold sensation ",
        emoji: require("../../assets/mood-emojis/calm.png")
        },
        {value: "I experienced a cold sensation, but it was not painful",
        emoji:require("../../assets/mood-emojis/happy.png")
        },
        {value: "I experienced a cold sensation, and it was painful ",
        emoji: require("../../assets/mood-emojis/confident.png")
        }
    ];
    return(
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Part 2.1</Text>
            <Text style = {styles.baseText}>From what you felt in the Cold Detection Test, which one of these options did you feel?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_6')}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        marginHorizontal:50,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    radiobutton:{
        marginTop: 100
    },
    container:{
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    baseText: {
      color:"black",
      fontFamily: 'Open Sans',
      textAlign: 'center',
      fontSize: 20,
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    buttonText:{
        textAlign: 'center',
    },
    button:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
  });
export default NPA2_5