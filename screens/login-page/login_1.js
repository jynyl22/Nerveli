import React from 'react';
import { Image, View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';

const Login_1 = ({navigation}) =>{
    return(
        <ScrollView style = {styles.container}>
            <Image style = {styles.mascot} source={require('../../assets/brand-mascot/elephantSign.png')}></Image>

            <Text style = {styles.text1}>Take control of your nerve pain. Live empowered.</Text>
            <Text style = {styles.text2}>Sign in to learn more about how you can manage your pain</Text>

            <Pressable style = {[styles.apple, {flexDirection: 'row'}]} onPress={() => navigation.navigate('Login_2')}>
                <Image style = {styles.appleLogo} source={require('../../assets/login-page/apple-logo.png')}></Image>
                <Text style = {styles.appleText}>Continue with Apple</Text>
            </Pressable>

            <View style = {{flexDirection: 'row', marginTop: 34, marginHorizontal: 79, justifyContent: 'space-between'}}>
                <Pressable style = {styles.circle} onPress={() => navigation.navigate('Login_2')}>
                    <Image style = {styles.email} source={require('../../assets/login-page/email.png')}></Image>
                </Pressable>
                <Pressable style = {styles.circle} onPress={() => navigation.navigate('Login_2')}>
                    <Image style = {styles.email} source={require('../../assets/login-page/google.png')}></Image>
                </Pressable>
                <Pressable style = {styles.circle} onPress={() => navigation.navigate('Login_2')}>
                    <Image style = {styles.email} source={require('../../assets/login-page/facebook.png')}></Image>
                </Pressable>
            </View>
            
            <View style = {styles.bottom}>
                <Text style = {styles.bottomText}>Don't have an account?   </Text>
                <Pressable onPress={() => navigation.navigate('Login_3')}>
                    <Text style = {[styles.bottomText, {color: '#569f4a'}]}>Sign up</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
    mascot: {
        width: 328,
        height: 400,
        marginLeft: 71,
        marginRight: 29,
        marginTop: 7
    },
    text1: {
        // fontFamily: 'Raleway',
        color: '#22541a',
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 56,
        marginRight: 54,
        textAlign: 'center'
    },
    text2: {
        color: '#569f4a',
        fontWeight: 500,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 25,
        marginLeft: 56,
        marginRight: 54,
    },
    apple: {
        backgroundColor: '#000',
        width: 372,
        height: 49,
        marginHorizontal: 28,
        borderRadius: 20,
        marginTop: 51,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appleLogo: {
        width: 18.94,
        height: 24,
    },
    appleText: {
        color: '#fff',
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 18,
        marginLeft: 10
    },
    circle: {
        backgroundColor: '#fff',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
    },
    bottom: {
        flexDirection: 'row',
        marginHorizontal: 72,
        marginTop: 60,
    },
    bottomText: {
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 15,
    }
});

export default Login_1