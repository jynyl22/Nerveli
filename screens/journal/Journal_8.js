import React from 'react';
import { View,Text,StyleSheet,Pressable, TextInput } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';


const Journal_8 = ({navigation}) =>{
    const [text, onChangeText] = React.useState('Start writing...');
    const [number, onChangeNumber]= React.useState('');

    return(
        <View style = {styles.container}>
            <Text style = {styles.baseText}>Any additional notes?</Text>
           
            <TextInput
                stlye = {styles.input}
                onChangeText = {onChangeText}
                value = {number}
                placeholder='Start writing...'
            />

            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_9')}>
                <Text style = {styles.buttonfont}>Finish</Text>
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
    },
    input:{
        
    }
  });

export default Journal_8