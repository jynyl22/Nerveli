import React from 'react';
import { View,Text,StyleSheet,Pressable } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const NPA1_1 = ({navigation}) =>{
    const data = [
        {value: "No pain",
        emoji: require("../../assets/mood-emojis/happy.png")
        },
        {value: "A little painful",
        emoji:require("../../assets/mood-emojis/bored.png")
        },
        {value: "A lot of pain",
        emoji: require("../../assets/mood-emojis/sad.png")
        },
        {value:"Extremely painful",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
    ];
    return(
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Part 1.1</Text>
            <Text style = {styles.baseText}>In the past 7 days, how would you rate your pain on average?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_2')}>
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
    button:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
  });
export default NPA1_1