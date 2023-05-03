import {useState} from 'react';
import { View,Text, Pressable,StyleSheet,Alert,ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';
import * as Progress from 'react-native-progress';

const NPA2_17 = ({navigation}) =>{
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
        {value: "I did not experience a cold sensation",
        emoji: "🙂"
        },
        {value: "I experienced a heat sensation, but it was not painful",
        emoji:"🔥"
        },
        {value: "I experienced a heat sensation, and it was painful",
        emoji: "😣"
        }
    ];
    return(
        <ScrollView style = {styles.container}>
            <Progress.Bar
            style={styles.progress}
            color='#31B877'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={333/372}
            width={372}
            />
            <Text style = {styles.baseText}>Part 2.4</Text>
            <Text style = {styles.baseText}>From what you felt in the Light Touch Stimulus Test, which one of these options did you feel?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data} selectAction={userSelection}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => (selected? navigation.navigate('NPA_End') : warnUser())}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    progress: {
        marginTop: 23,
        alignSelf:'center',
        height:5,
        marginBottom: 10
    },
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
        marginTop: 55
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
export default NPA2_17