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
        width:20,
        height:20,
        paddingRight: 5
    },
    container:{
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
    },
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
  background: {
    backgroundColor: '#EEF5ED',//#EEF5ED
    width: "100%",
    height: "130%",
    flexDirection: 'row',
    paddingRight:5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4
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