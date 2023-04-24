import React from 'react';
import { View,Text,StyleSheet,Pressable, ScrollView } from 'react-native';
import RadioButton from '../../components/buttons/radio_button';
import * as Progress from 'react-native-progress';

const Journal_5 = ({navigation}) =>{
    const data = [
        {value: "Yes, I did",
        emoji: "👍"
        },
        {value: "Not today",
        emoji: "🙅"
        },
    ];

    return(
        <ScrollView>

        <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={267/372}
            width={372}
        />

        <View style = {styles.container}>
            <Text style = {styles.baseText}>Did you take any medication today?</Text>
            <View style = {styles.radiobutton}>
                <RadioButton data={data}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_6')}>
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
        marginTop: 41
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
      marginTop: 66,
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    button:{
        flex: 1,
        // justifyContent: 'flex-end',
        marginTop: 413
    },
    progress: {
        position: 'absolute',
        height: 5,
        left: 28,
        marginTop: 23,
    },
  });

export default Journal_5