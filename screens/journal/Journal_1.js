import React from 'react';
import { View,Text,StyleSheet,Pressable } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_1 = ({navigation}) =>{
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
            <Text style = {styles.baseText}>Ready to journal, Jane?</Text>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_2')}>
                <Text style = {styles.buttonfont}>Log today's journal entry</Text>
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
      color:"white",
      backgroundColor: '#2BB673',
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
export default Journal_1;