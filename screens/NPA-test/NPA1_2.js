import React, {useState} from 'react';
import { View,Text, Pressable,StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import DraggableBox from '../../components/graph/graph.js';

const NPA1_2 = ({navigation}) =>{
    const [count, setValue] = useState(count ?? 1);
    return(
        <ScrollView style = {styles.container}>
            <Text style = {styles.baseText}>Part 1.2</Text>
            <Text style = {styles.baseText}>In the past 7 days, on a scale of 1-5, how much did pain interfere with your day-to-day activities?</Text>
            {/* <DraggableBox boxSize={{ width: 300, height: 300, x: 50,y:50 }}/> */}
            <View style = {styles.button}>
                <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_3')}>
                    <Text style = {styles.buttonfont}>Continue</Text>
                </Pressable>
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
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    button:{
        flex: 1,
        justifyContent: 'flex-start',
        marginBottom: 36
    }
  });
export default NPA1_2