import React from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'


const WelcomePage_3 = ({navigation}) =>{
    const title = 'Our Purpose'
    const description = 'Our goal is to help you take\ncontrol of your own health. We\nutilize artificial intelligence to\ncreate a health journey plan that is\nspecifically tailored to you.'

    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-3.png')}/>
                <WelcomeCard
                    title={title}
                    content={description}
                    navigation={navigation}
                    nextPage='WelcomePage_5'
                    buttonText='Continue'
                ></WelcomeCard>
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
    }
});

export default WelcomePage_3