import React from 'react';
import { Image, View, StyleSheet, Text, TextInput, Pressable, ScrollView } from 'react-native';


const Login_3 = ({navigation}) =>{
    const [first, onChangeFirst] = React.useState('')
    const [last, onChangeLast] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [pass, onChangePass] = React.useState('')


    return(
        <ScrollView style = {styles.container}>

            <Text style = {styles.headerText}>Sign up</Text>

            <View style = {{flexDirection: 'row'}}>
                <TextInput
                    style={[styles.nameBox, {marginTop: 28}]}
                    onChangeText={onChangeFirst}
                    value={first}
                    placeholder='First Name'
                />
                <TextInput
                    style={[styles.nameBox, {marginTop: 28}]}
                    onChangeText={onChangeLast}
                    value={last}
                    placeholder='Last Name'
                />
            </View>

            <TextInput
                style={[styles.textBox, {marginTop: 26}]}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='Email'
            />
            <TextInput
                style={[styles.textBox, {marginTop: 26}]}
                onChangeText={onChangePass}
                value={pass}
                placeholder='Password'
            />

            <Text style = {styles.agree}>By creating an account, you are agreeing to our Terms & Conditions and Privacy Policy</Text>

            <Pressable style = {styles.loginBtn} onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.btnText}>Sign up</Text>
            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 33}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#c4c4c4', marginLeft: 55}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center', color: '#7c7c7c'}}>OR</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: '#c4c4c4', marginRight: 55}} />
            </View>

            <View style = {{flexDirection: 'row', marginTop: 39, marginHorizontal: 79, justifyContent: 'space-between'}}>
                <Pressable style = {styles.circle}>
                    <Image style = {styles.email} source={require('../../assets/login-page/apple2.png')}></Image>
                </Pressable>
                <Pressable style = {styles.circle}>
                    <Image style = {styles.email} source={require('../../assets/login-page/google.png')}></Image>
                </Pressable>
                <Pressable style = {styles.circle}>
                    <Image style = {styles.email} source={require('../../assets/login-page/facebook.png')}></Image>
                </Pressable>
            </View>

            <View style = {styles.bottom}>
                <Text style = {styles.bottomText}>Already have an account?  </Text>
                <Pressable onPress={() => navigation.navigate('Login_2')}>
                    <Text style = {[styles.bottomText, {color: '#2bb673'}]}>Log in</Text>
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
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 25,
        color: '#2b2b2b',
        marginLeft: 28,
        marginTop: 47,
    },
    nameBox: {
        backgroundColor: '#fff',
        width: 172,
        height: 49,
        marginLeft: 28,
        borderRadius: 12,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        fontFamily: 'Lato',
        fontSize: 18,
        paddingLeft: 26
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
        fontFamily: 'Lato',
        // fontWeight: 600,
        fontSize: 18,
        paddingLeft: 24.13
    },
    loginBtn: {
        width: 209,
        height: 49,
        backgroundColor: '#2bb673',
        marginHorizontal: 109,
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
    },
    btnText: {
        fontFamily: 'Lato',
        color: '#fff',
        fontWeight: 700,
        fontSize: 20,
    },
    agree: {
        width: 319,
        fontSize: 15,
        marginTop: 47,
        marginHorizontal: 54,
        textAlign: 'center',
        color: '#2b2b2b',
        letterSpacing: 0.05
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
        marginHorizontal: 72,
        marginTop: 130,
    },
    bottomText: {
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 15,
    }
});

export default Login_3