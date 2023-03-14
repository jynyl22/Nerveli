import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import {styles} from ".././App"
const NPA2 = ({navigation}) =>{
    return(
        <View>
            <Text>Home 2 Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NPA1')}>
                <Text>Go to different page</Text>
                </TouchableOpacity>
        </View>
    );
};

export default NPA2