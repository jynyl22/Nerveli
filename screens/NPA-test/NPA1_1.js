import {useState} from 'react';
import { View,Text,StyleSheet,Pressable,Alert } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const NPA1_1 = ({navigation}) =>{
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
        {value: "No pain",
        emoji: "😊"
        },
        {value: "A little painful",
        emoji: "😕"
        },
        {value: "A lot of pain",
        emoji: "🤕"
        },
        {value:"Extremely painful",
        emoji: "😭"
        },
    ];
    return(
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Part 1.1</Text>
            <Text style = {styles.baseText}>In the past 7 days, how would you rate your pain on average?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data} selectAction={userSelection}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => (selected? navigation.navigate('NPA1_2') : warnUser())}>
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