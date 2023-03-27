import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';


const WelcomePage = ({navigation}) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/brand-mascot/elephantBase.png')}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 30,
        justifyContent: 'center',
    },
    figure: {

    },
    card: {

    }    
});

export default WelcomePage