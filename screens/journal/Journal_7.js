import React from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_7 = ({navigation}) =>{
    const data = [
        {value: "1",
        emoji: require("../../assets/misc-emojis/red.png")
        },
        {value: "2",
        emoji: require("../../assets/misc-emojis/orange.png")
        },
        {value: "3",
        emoji: require("../../assets/misc-emojis/yellow.png")
        },
        {value:"4",
        emoji: require("../../assets/misc-emojis/green.png")
        },
        {value:"5",
        emoji: require("../../assets/misc-emojis/blue.png")
        },
        {value:"6",
        emoji: require("../../assets/misc-emojis/purple.png")
        },
    ];

    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.baseText}>How many did you take?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_8')}>
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

export default Journal_7