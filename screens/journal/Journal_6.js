import React from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_6 = ({navigation}) =>{
    const data = [
        {value: "Ibuprofen",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value: "Opioids",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value: "SNRI",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Neurontin",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Acetaminophen",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Gabapentin",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Lyrica",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Bayer",
        emoji: require("../../assets/misc-emojis/pill.png")
        },
        {value:"Aspercreme",
        emoji: require("../../assets/misc-emojis/cream.png")
        },
    ];

    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.baseText}>What medication did you take?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_7')}>
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

export default Journal_6