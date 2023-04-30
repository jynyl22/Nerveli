import React from 'react';
import { View,Text,StyleSheet,Pressable, TextInput, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';


const Journal_8 = ({navigation}) =>{
    const [text, onChangeText] = React.useState('');

    return(
        <ScrollView style = {styles.container}>

        <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={1}
            width={372}
        />

            <Text style = {styles.baseText}>Any additional notes?</Text>

            <ScrollView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Start writing...'
                multiline={true}
            />
            </ScrollView>

            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_9')}>
                <Text style = {styles.buttonfont}>Finish</Text>
            </Pressable>
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
      marginTop: 66,
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    button:{
        flex: 1,
        // justifyContent: 'flex-end',
        marginTop: 62,
    },
    input:{
        backgroundColor: '#eef5ed',
        marginTop: 41,
        marginLeft: 29,
        marginRight: 26,
        fontWeight: '700',
        fontSize: 20,
        width: 373,
        height: 477,
        borderRadius: 20,
        textAlign: 'left',
        paddingHorizontal: 25,
        paddingTop: 16
    },
    progress: {
        position: 'absolute',
        height: 5,
        left: 28,
        marginTop: 23,
    }
  });

export default Journal_8