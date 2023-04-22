import {useState} from 'react';
import { View,Text, Pressable,StyleSheet, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const NPA1_9 = ({navigation}) =>{
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
        {value: "Pins and needles",
        emoji: "📌️"
        },
        {value: "Stinging",
        emoji: "🐝"
        },
        {value: "Sore",
        emoji: "😣"
        },
        {value:"Burning",
        emoji: "🔥"
        },
        {value:"Sharp",
        emoji: "🔪"
        },
        {value:"Dull",
        emoji: "😕"
        },
        {value:"Electrical",
        emoji: "⚡️"
        },
        {value:"Tender",
        emoji: "😥"
        },
        {value:"Numb",
        emoji: "😒"
        },
        {value:"Other",
        emoji: "🥲"
        },
    ];
    return(
        <ScrollView overScrollMode="never">
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Part 1.9</Text>
            <Text style = {styles.baseText}>What words best describe your pain?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data} selectAction={userSelection}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => (selected? navigation.navigate('NPA1_10') : warnUser())}>
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