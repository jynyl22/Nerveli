import {React,useState} from 'react';
import { View, LayoutAnimation, Text, Pressable, Image, UIManager, Platform} from 'react-native';

const WeatherPanel = ({data}) => {
    return(
        <Pressable style = {styles.weatherTile}>
            <View style = {{flexDirection: 'column'}}>
                <Text style = {styles.temp}>{data.temp}</Text>
                <Text style = {styles.weatherLabel}>Weather</Text>
                <Text style = {styles.weatherRec}>{data.weatherRec}</Text>
            </View>
            <View style = {{flexDirection: 'column'}}>
                <Image style = {styles.weatherIcon} source={data.icon}></Image>
            </View>
        </Pressable>
    )
}

const Description = (desc) => {
    return(
        <Text style = {styles.description}>{desc}</Text>
    )
}

const RecPanels = ({data}) => {
    return (
        <View>
            {data.map((item) => {
                const [pressed, setPressed] = useState(false);
                if (Platform.OS === 'android') {
                    UIManager.setLayoutAnimationEnabledExperimental(true);
                }
                return(
                    <View key = {item.id} style = {[styles.container, pressed ? {marginBottom : 120} : null]}>
                        <Pressable
                            style={[pressed ? styles.selected : styles.unselected, styles.button]}
                            onPress={()=> {
                                setPressed(!pressed);
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            }}>
                                <View style={{flexDirection: 'row', marginBottom: 5}}>
                                    <Text style = {styles.emoji}>{item.emoji}</Text>
                                    <Text style = {[styles.text, pressed ? {color: 'white', fontWeight: 800} : null]}>{item.recommendation}</Text>
                                </View>
                                <View style={[pressed ? {height:null} : {height: 0}, {overflow: 'hidden'}]}>
                                    {Description(item.description)}
                                </View>
                            </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    emoji: {
        color: 'black',
        fontSize: 18
    },
    weatherTile:{
        display: 'flex',
        width: 'auto',
        height: 171,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20,
        marginBottom:20,
        flexDirection: 'row',
        backgroundColor: '#31B877',
        borderRadius: 20
    },
    temp:{
        fontSize: 45,
        marginLeft: 25,
        marginTop: 35,
        fontWeight: 800,
        color: '#FFFFFF'
    },
    weatherLabel: {
        fontSize: 20,
        marginLeft: 25,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    weatherRec: {
        fontSize: 15,
        marginLeft: 25,
        fontWeight: 400,
        color: '#FFFFFF'
    },
    weatherIcon: {
        width: 97,
        height: 93,
        position: 'absolute',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },
    container:{
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        flexDirection: 'column',
		justifyContent: 'space-between',
        backgroundColor: '#EEF5ED',
        borderRadius: 20
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'OpenSans-Medium',
        textAlign: 'left',
        paddingLeft: 15
    },
    description: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'OpenSans-Medium',
        textAlign: 'left',
        paddingLeft: 15
    },
    button: {
        width: '100%',
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 17,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    unselected: {
        height: 60,
        borderColor: '#2BB673',
    },
    selected: {
        height: 165,
        borderRadius: 50,
        backgroundColor: '#2BB673',
    },
});

export {
    WeatherPanel,
    RecPanels
};