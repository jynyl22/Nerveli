import React, {useState} from 'react';
import { View,Text, Pressable,StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';

const Journal_4 = ({navigation}) =>{
    const [count, setValue] = useState(count ?? 1);
    return(
        <View style = {styles.container}>

        <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={187/372}
            width={372}
        />

            <Text style = {styles.baseText}>How are you feeling today, Jane?</Text>
            <Text style = {styles.baseText}>Rate on a scale of 1-5, 1 being no pain and 5 being severe pain.</Text>
            <View style = {styles.radiobutton}>
                <Text style = {{textAlign:'center',fontFamily:'Lato',fontSize:20,color:'black'}}>{count}</Text>
                <Slider style={{margin:30}}
                step={1}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="red"
                maximumTrackTintColor="#000000"
                value={count}
                onValueChange={setValue}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_5')}>
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
        marginTop: 200,
        alignContent: 'center',
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
      marginTop: 65,
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    button:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    progress: {
        position: 'absolute',
        height: 5,
        left: 28,
        marginTop: 23,
    },
  });
  
export default Journal_4