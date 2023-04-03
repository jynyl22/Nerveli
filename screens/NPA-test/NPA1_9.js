import React from 'react';
import { View,Text, Pressable,StyleSheet, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const NPA1_9 = ({navigation}) =>{
    const data = [
        {value: "Pins and needles",
        emoji: require("../../assets/mood-emojis/happy.png")
        },
        {value: "Stinging",
        emoji:require("../../assets/mood-emojis/bored.png")
        },
        {value: "Sore",
        emoji: require("../../assets/mood-emojis/sad.png")
        },
        {value:"Burning",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Sharp",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Dull",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Electrical",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Tender",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Other",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
        {value:"Extremely painful",
        emoji: require("../../assets/mood-emojis/upset.png")
        },
    ];
    return(
        <ScrollView overScrollMode="never">
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Part 1.9</Text>
            <Text style = {styles.baseText}>What words best describe your pain?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_10')}>
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
        marginTop: 20
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
export default NPA1_9