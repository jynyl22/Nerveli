import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';

const NPA1 = ({navigation}) =>{
    return(
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NPA2')}>
                <Text>Go to different page</Text>
                </TouchableOpacity>
        </View>
    );
};

export default NPA1