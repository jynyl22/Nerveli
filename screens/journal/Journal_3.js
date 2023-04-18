import React from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_3 = ({navigation}) =>{
    const data = [
        {value: "Running",
        emoji: require("../../assets/activity-emojis/running.png")
        },
        {value: "Hiking",
        emoji: require("../../assets/activity-emojis/hiking.png")
        },
        {value: "Biking",
        emoji: require("../../assets/activity-emojis/biking.png")
        },
        {value:"Household Chores",
        emoji: require("../../assets/activity-emojis/household-chores.png")
        },
        {value:"Soccer",
        emoji: require("../../assets/activity-emojis/soccer.png")
        },
        {value:"Swimming",
        emoji: require("../../assets/activity-emojis/swimming.png")
        },
        {value:"Tennis",
        emoji: require("../../assets/activity-emojis/tennis.png")
        },
        {value:"Fishing",
        emoji: require("../../assets/activity-emojis/fishing.png")
        },
        {value:"Video Games",
        emoji: require("../../assets/activity-emojis/video-games.png")
        },
    ];

    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.baseText}>What activities and exercises have you performed today?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_4')}>
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

export default Journal_3