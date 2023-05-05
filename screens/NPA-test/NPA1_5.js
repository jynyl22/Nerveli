import React, {useState} from 'react';
import { View,Text, Pressable,StyleSheet, ScrollView, ImageBackground } from 'react-native';
import DraggableBox from '../../components/graph/graph.js';
import * as Progress from 'react-native-progress';
const NPA1_5 = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={141/372}
            width={372}
            />
            <Text style = {styles.baseText}>Part 1.5</Text>
            <Text style = {styles.baseText}>In the past 7 days, how much did pain interfere with your ability to participate in social activities?</Text>
            <Text style = {styles.topText}>Severe Pain</Text>
            <View style = {styles.imgView}>
                <ImageBackground
                    style={styles.img}
                    source={require('../../assets/images/Gradient.jpg')}
                    >
                </ImageBackground>
            </View>
            <DraggableBox boxSize={{ width: 300, height: 300, x: 0,y:0}}/>
            <Text style = {styles.leftText}>No interference with activities</Text>
            <Text style = {styles.rightText}>Completely interferes with activities</Text>
            <Text style = {styles.bottomText}>No Pain</Text>
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_6')}>
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
    unselected:{
        backgroundColor: 'green',
        opacity: 0.5
    },
    selected: {
        backgroundColor: '#9d1600',
        opacity: 0.85
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
    imgView:{
        flex: 7,
        flexWrap: 'wrap',
        borderRadius: 10,
        alignContent : 'center',
        top:190,
        position: 'absolute',
        width: 300,
        height: 300,
        resizeMode: 'center'
    },
    img:{
        borderRadius: 10,
        width: 300,
        height: 300
    },
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
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
    topText: {
      color:"black",
      fontFamily: 'Open Sans',
      textAlign: 'center',
      fontSize: 18,
      top:0,
      marginRight:20,
      marginLeft:20,
      marginBottom:10
    },
    leftText: {
          color:"black",
          fontFamily: 'Open Sans',
          textAlign: 'center',
          fontSize: 18,
          transform: [{ rotate: '270deg'}],
          top:-160,
          left:-170,
          marginRight:20,
          marginLeft:20,
          marginBottom:10
        },
    rightText: {
          color:"black",
          fontFamily: 'Open Sans',
          textAlign: 'center',
          fontSize: 18,
          transform: [{ rotate: '90deg'}],
          top:-200,
          left:170,
          marginRight:20,
          marginLeft:20,
          marginBottom:10
        },
    bottomText: {
      color:"black",
      fontFamily: 'Open Sans',
      textAlign: 'center',
      fontSize: 18,
      top:-60,
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
export default NPA1_5