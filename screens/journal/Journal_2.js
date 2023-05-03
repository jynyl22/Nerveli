import React ,{useState}from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView, StatusBar,Alert } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';
import * as Progress from 'react-native-progress';


const Journal_2 = ({navigation}) =>{
    const [selected, setSelected] = useState(false);
    function userSelection() {
        if (!selected) {
            setSelected(true);
        }
    }

    function warnUser() {
        Alert.alert(
            "Error",
            "Please select an option.",
            [
                {
                    text: "OK",
                    style: "cancel"
                },
            ],
            {cancelable: true}
        )
    }

    const data = [
        {value: "Happy",
        emoji: "🤗"
        },
        {value: "Confident",
        emoji: "😎"
        },
        {value: "Excited",
        emoji: "🥳"
        },
        {value:"Calm",
        emoji: "😌"
        },
        {value:"Neutral",
        emoji: "😐"
        },
        {value:"Tired",
        emoji: "😴"
        },
        {value:"Stressed",
        emoji: "😓"
        },
        {value:"Sad",
        emoji: "😭"
        },
        {value:"Angry",
        emoji: "😡"
        },
    ];

    return(
        <ScrollView overScrollMode="never">

        <StatusBar 
            barStyle='dark-content'
        />

        <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={67/372}
            width={372}
        />
        
        <View style = {styles.container}>

            <Text style = {styles.baseText}>How is your mood today?</Text>

            <View style = {styles.radiobutton}>
                <RadioButton data={data} selectAction={userSelection}/>
            </View>

            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => (selected?navigation.navigate('Journal_3') : warnUser())}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>

        </View>

        <View style = {styles.empty}></View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18,
        fontWeight: '700'
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
        marginTop: 38
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
        marginTop: 67,
        marginRight:20,
        marginLeft:20,
        marginBottom:10
    },
    button:{
        marginTop: 38
    },
    progress: {
        position: 'absolute',
        height: 5,
        left: 28,
        marginTop: 23,
    },
    empty: {
        height: 152,
    }
  });

export default Journal_2