import React from 'react';
import { StyleSheet, View , TouchableOpacity, Text, Pressable} from "react-native";
import Svg, {Path} from 'react-native-svg'

export default GreenHeader = (props) => {
const {title} = props;

    return (
       <View styles={styles.header}>
            <Text style = {styles.title}>{title}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        width: 50,
        height: 60,
        paddingHorizontal: 20,
      },
    title:{
        color: 'black',
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: 20
    }
});