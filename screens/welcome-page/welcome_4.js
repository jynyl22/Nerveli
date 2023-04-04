import React from 'react';
import { Image, View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';


const WelcomePage_4 = ({navigation}) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-4.png')}/>
                <Text style={styles.title}>Privacy</Text>
                <Text style={styles.description}>
                    We take your privacy
                    <Text style={{fontWeight: 800}}> seriously </Text>
                    and {'\n'}make sure everything we do is {'\n'}Hippa compliant.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.card_text}>
                        All personal and medical information presented in the app is 
                        <Text style={{fontWeight: 800}}> anonymized.</Text>
                    </Text>

                    <Text style={styles.card_text}>
                        We are 
                        <Text style={{fontWeight: 800}}> commited not to sell </Text>
                        your personal information to anyone, unless it is with your consent to directly benefit you.
                    </Text>

                    <Text style={styles.card_text}>
                        You have the right to have your personal data deleted at 
                        <Text style={{fontWeight: 800}}> any time.</Text>
                    </Text>
                </View>
                
                <Text style={styles.bottom_text}>
                    Please tap '
                    <Text style={styles.bold_text_green}>Accept</Text>
                    ' to indicate that {'\n'}you understand consent to our {'\n'}policies.
                </Text>
                <Text style={styles.bottom_text}>
                    You can learn more about how we{'\n'}process data in our 
                    <Text style={styles.bold_text_green}> Privacy Policy </Text>{'\n'}and 
                    <Text style={styles.bold_text_green}> Terms of Use</Text>.
                </Text>

                <View style = {styles.button}>
                    <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('WelcomePage_5')}>
                        <Text style = {styles.buttonfont}>Accept</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
        justifyContent: 'center'
    },
    figure: {
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontFamily: 'Lato',
        fontWeight: 800,
        fontSize: 25,
        color: '#2B2B2B',
        marginTop: 50,
        paddingVertical: 15,
        alignSelf: 'center'
    },
    description: {
        flex: 1,
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 20,
        color: '#2B2B2B',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 30
    },
    boldText: {
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#EEF5ED',
        marginTop: 30,
        marginHorizontal: 30,
        paddingHorizontal: 30
    },
    card_text: {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 18,
        color: '#2B2B2B',
        paddingVertical: 20
    },
    bottom_text: {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 20,
        color: '#2B2B2B',
        textAlign: 'center',
        marginHorizontal: 30,
        paddingVertical: 20,
        lineHeight: 27.24
    },
    bold_text_green: {
        fontWeight: 800,
        color: '#2BB673',
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 49,
        marginTop: 60,
        marginBottom: 60,
        marginHorizontal: 55,
        borderRadius: 20,
        backgroundColor: '#2BB673'
      },
      button:{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 36
      },
      buttonfont:{
          color:'white',
          fontFamily:'Open Sans',
          fontSize:20,
          fontWeight: 700
      }
});

export default WelcomePage_4