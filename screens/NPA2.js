import React from 'react';
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';
import RadioButton from '../components/buttons/radio_button';


const NPA2 = ({navigation}) =>{
    const data = [
        {value: "No pain",
        emoji: require("../assets/mood-emojis/happy.png")
        },
        {value: "A little painful",
        emoji:require("../assets/mood-emojis/bored.png")
        },
        {value: "A lot of pain",
        emoji: require("../assets/mood-emojis/sad.png")
        },
        {value:"Extremely painful",
        emoji: require("../assets/mood-emojis/upset.png")
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
            <TouchableOpacity onPress={() => navigation.navigate('NPA1')}>
                <Text style = {styles.buttonText}>Go to different page</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    buttonText:{
        textAlign: 'center',
    },
    button:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
  });
export default NPA2