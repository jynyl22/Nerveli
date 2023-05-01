import {React, useState, useEffect} from 'react';
import { View, Text, Pressable} from 'react-native';


export default function RadioButton({data, selectAction}) {
    const [userOption, setUserOption] = useState(null);

    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable 
                    key={item.emoji}
                    style = {item.value === userOption ? styles.containerselected: styles.containerunselected} 
                    onPress={() => {setUserOption(item.value); selectAction();}}>
                        <Text style = {styles.emoji}>{item.emoji}</Text>
                        <View style = {styles.background}>
                        <Text style = {item.value === userOption ? styles.textselected: styles.textunselected}>{item.value}</Text>
                        <View style = {item.value === userOption ? styles.selectedring: styles.unselectedring}>
                            <View style = {item.value === userOption ? styles.selected : null}/>
                        </View>
                        </View>
                    </Pressable>
            );
          })}
        </View>
      );
        
}
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    emoji:{
      color: 'black',
      fontSize: 18,
      paddingLeft:20,
      //fontFamily: 'OpenSans-Medium',
    },
    containerunselected:{
        paddingVertical: 20,
        paddingRight: 20,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
		    justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: '#2BB673',
        borderWidth: 2
    },
    containerselected:{
      paddingVertical: 20,
      paddingRight: 20,
      marginLeft: 35,
      marginRight: 35,
      marginBottom: 20,
      alignItems: 'center',
      flexDirection: 'row',
		  justifyContent: 'space-between',
      backgroundColor: '#2BB673',
      borderRadius: 25,
      borderColor: '#2BB673',
      borderWidth: 2
  },
  textselected: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'OpenSans-Medium',
    textAlign: 'left',
    paddingRight: 30
  },
  textunselected: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'OpenSans-Medium',
    textAlign: 'left',
    paddingRight: 30
  },
  background: {
    //backgroundColor: 'red',//#EEF5ED
    width: "90%",
    height: "130%",
    flexDirection: 'row',
    paddingRight:25,
    paddingLeft:5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedring: {
    height: 25,
	  width: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselectedring: {
    height: 25,
	  width: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#2BB673',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 16,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});