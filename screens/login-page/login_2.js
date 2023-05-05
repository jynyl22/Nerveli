import React from 'react';
import { Image, View, StyleSheet, Text, TextInput, Pressable, ScrollView } from 'react-native';

const Login_2 = ({navigation}) =>{
    const [email, onChangeEmail] = React.useState('');
    const [pass, onChangePass] = React.useState('');


    return(
        <ScrollView overScrollMode="never" style = {styles.container}>

            <Text style = {styles.headerText}>Welcome back!</Text>

            <TextInput
                style={[styles.textBox, {marginTop: 35}]}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='Email'
            />

            <TextInput
                style={[styles.textBox, {marginTop: 19}]}
                onChangeText={onChangePass}
                value={pass}
                placeholder='Password'
                secureTextEntry={true}
            />

            <Pressable style = {styles.loginBtn} onPress={() => navigation.navigate('Overview')}>
                <Text style = {styles.btnText}>Log in</Text>
            </Pressable>

            <Text style = {styles.pw}>Forgot your password?</Text>
            
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 68}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#c4c4c4', marginLeft: 55}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center', color: '#7c7c7c'}}>OR</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: '#c4c4c4', marginRight: 55}} />
            </View>

            <View style = {{flexDirection: 'row', marginTop: 39, marginHorizontal: 79, justifyContent: 'space-between'}}>
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
                    <Text style = {[styles.bottomText, {color: '#2bb673'}]}>Sign up</Text>
                </Pressable>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 40
    },
    headerText: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: 25,
        color: '#2b2b2b',
        marginLeft: 28,
        marginTop: 47,
    },
    textBox: {
        backgroundColor: '#fff',
        width: 372,
        height: 49,
        marginLeft: 28,
        borderRadius: 12,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        fontFamily: 'Raleway',
        fontSize: 18,
        paddingLeft: 24.13
    },
    loginBtn: {
        width: "60%",
        height: 49,
        backgroundColor: '#2bb673',
        marginTop: 48,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        alignSelf:'center'
    },
    btnText: {
        fontFamily: 'Lato',
        color: '#fff',
        fontWeight: 700,
        fontSize: 20,
    },
    pw: {
        fontFamily: 'Raleway',
        fontSize: 15,
        marginTop: 29,
        textAlign: 'center',
        color: '#2b2b2b'
    },
    or: {
        fontSize: 15,
        marginTop: 68,
        textAlign: 'center'
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
        marginTop: 176,
        alignSelf:'center'
    },
    bottomText: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: 15,
    }
});

export default Login_2