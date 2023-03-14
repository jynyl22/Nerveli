import {React,useState} from 'react';
import { View, Text, TouchableOpacity, Pressable, Image} from 'react-native';


export default function RadioButton({ data}) {
    const [userOption, setUserOption] = useState(null);
    return (
        <View>
            {data.map((item) => {
                return (
                <View style = {styles.container}>
                    <Pressable style = {styles.background} onPress={() => setUserOption(item.value)}>
                        <Image style = {styles.imagesize}source={item.emoji}/>
                        <View style = {styles.background}>
                        <Text style = {styles.text}> {item.value}</Text>
                        <View style = {styles.unselected}>
                            <View style = {item.value === userOption ? styles.selected : null}/>
                        </View>
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
    imagesize:{
        width: 20,
        height: 20,
    },
    container:{
        height:50,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
		    justifyContent: 'space-between',
        backgroundColor: '#EEF5ED',
        borderRadius: 10

    },
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
  background: {
    //backgroundColor: 'red',//#EEF5ED
    width: "100%",
    height: "130%",
    flexDirection: 'row',
    paddingRight:15,
    paddingLeft:15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unselected: {
    height: 20,
	  width: 20,
	borderRadius: 100,
	borderWidth: 2,
	borderColor: '#2BB673',
  alignItems: 'center',
	justifyContent: 'center',
  
  },
  selected: {
    width: 10,
	height: 10,
	borderRadius: 50,
	backgroundColor: '#2BB673',
  },
});