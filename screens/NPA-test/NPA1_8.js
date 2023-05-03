import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';
import BodyButtons from '../../components/buttons/body_button';
import * as Progress from 'react-native-progress';
const NPA1_8 = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Progress.Bar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={216/372}
            width={372}
            />
            <Text style = {styles.baseText}>Part 1.8</Text>
            <Text style = {styles.baseText}>Using this body map, please show us where you have pain.</Text>
            <View style = {styles.imgView}>
                <ImageBackground
                    style={styles.img}
                    source={require('../../assets/images/bodymap.jpg')}
                    >
                        <BodyButtons bodyPoints={bodyPoints}/>
                </ImageBackground>
            </View>
            
            <View style = {styles.button}>
            <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('NPA1_9')}>
                <Text style = {styles.buttonfont}>Continue</Text>
            </Pressable>
            </View>
        </View>
    );
};

const bodyPoints = [
    {
        id: 0,
        name: 'head',
        margLeft: 109,
        margTop: 28
    },
    {
        id: 1,
        name: 'leftShoulder',
        margLeft: 65,
        margTop: 88
    },
    {
        id: 2,
        name: 'rightShoulder',
        margLeft: 153,
        margTop: 88
    },
    {
        id: 3,
        name: 'chest',
        margLeft: 109,
        margTop: 110
    },
    {
        id: 4,
        name: 'leftElbow',
        margLeft: 60,
        margTop: 150
    },
    {
        id: 5,
        name: 'rightElbow',
        margLeft: 158,
        margTop: 150
    },
    {
        id: 6,
        name: 'coreHips',
        margLeft: 94,
        margTop: 179,
        wide: true
    },
    {
        id: 7,
        name: 'leftWrist',
        margLeft: 45,
        margTop: 205
    },
    {
        id: 8,
        name: 'rightWrist',
        margLeft: 173,
        margTop: 205
    },
    // {
    //     id: 9,
    //     name: 'groin',
    //     margLeft: 109,
    //     margTop: 220
    // },
    {
        id: 10,
        name: 'knees',
        margLeft: 94,
        margTop: 285,
        wide: true
    },
    {
        id: 11,
        name: 'ankles',
        margLeft: 94,
        margTop: 370,
        wide: true
    },
];

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
        alignContent : 'center',
        width: 230,
        height: 429,
        resizeMode: 'center'
    },
    img:{
        width: 230,
        height: 429
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
    button:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
  });
export default NPA1_8