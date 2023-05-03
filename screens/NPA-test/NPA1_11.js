import React, {useState} from 'react';
import { View,Text, Pressable,StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';

const NPA1_10 = ({navigation}) =>{
    const [count, setValue] = useState(count ?? 1);
    return(
        <View style = {styles.container}>
            <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={352/372}
            width={372}
            />
            <Text style = {styles.baseText}>Part 1.11</Text>
            <Text style = {styles.baseText}>Okay, last question! How often are you in pain? On a scale of 1-5 with 1 being not often and 5 being very often.</Text>
            <View style = {styles.slider}>
                <Text style = {{textAlign:'center',fontFamily:'Lato',fontSize:20,color:'black'}}>{count}</Text>
                <Slider style={{margin:30}}
                step={1}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#80FF88"
                maximumTrackTintColor="black"
                value={count}
                onValueChange={setValue}/>
            </View>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA2_1')}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
        </View>
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
    slider:{
        marginTop:100,
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
export default NPA1_10