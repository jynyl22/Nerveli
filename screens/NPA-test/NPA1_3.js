import React, {useState} from 'react';
import { View,Text, Pressable,StyleSheet } from 'react-native';
import DraggableBox from '../../components/graph/graph.js';
import * as Progress from 'react-native-progress';


const NPA1_3 = ({navigation}) =>{
    const [count, setValue] = useState(count ?? 1);
    return(
        <View style = {styles.container}>
            <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={76/372}
            width={372}
            />
            <Text style = {styles.baseText}>Part 1.3</Text>
            <Text style = {styles.baseText}>In the past 7 days, how much did pain interfere with work around the home?</Text>
                <DraggableBox boxSize={{ width: 300, height: 300, x: 50,y:50 }}/>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_4')}>
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
        paddingTop:180
    }
  });
export default NPA1_3