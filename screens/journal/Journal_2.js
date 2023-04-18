import React from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_2 = ({navigation}) =>{
    const data = [
        {value: "Happy",
        emoji: require("../../assets/mood-emojis/blushing.png")
        },
        {value: "Confident",
        emoji:require("../../assets/mood-emojis/confident.png")
        },
        {value: "Excited",
        emoji: require("../../assets/mood-emojis/excited.png")
        },
        {value:"Calm",
        emoji: require("../../assets/mood-emojis/calm.png")
        },
        {value:"Neutral",
        emoji: require("../../assets/mood-emojis/bored.png")
        },
        {value:"Tired",
        emoji: require("../../assets/mood-emojis/tired.png")
        },
        {value:"Stressed",
        emoji: require("../../assets/mood-emojis/stressed.png")
        },
        {value:"Sad",
        emoji: require("../../assets/mood-emojis/cry.png")
        },
        {value:"Angry",
        emoji: require("../../assets/mood-emojis/angry.png")
        },
    ];

    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.baseText}>How is your mood today?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_3')}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
        </View>
        </ScrollView>
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

export default Journal_2