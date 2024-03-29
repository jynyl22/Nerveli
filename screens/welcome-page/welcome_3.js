import React, { useState } from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'


const WelcomePage_3 = ({navigation}) =>{
    const title = 'Our Purpose'
    const description = 'Our goal is to help you take\ncontrol of your own health. We\nutilize artificial intelligence to\ncreate a health journey plan that is\nspecifically tailored to you.'
    const [currentPageIdx] = useState(2);

    return(
        <ScrollView overScrollMode="never">
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-3.png')}/>
                <WelcomeCard
                    title={title}
                    content={description}
                    navigation={navigation}
                    nextPage='WelcomePage_4'
                    buttonText='Continue'
                    currentPageIdx={currentPageIdx}
                ></WelcomeCard>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ...Platform.select({
        android: {
            figure: {
                height: 200,
                resizeMode: 'contain',
                alignSelf: 'center'
            }
        },
        ios: {
            figure: {
                height: 200,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 77
            }
        }
    }),
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
        justifyContent: 'center'
    },
});

export default WelcomePage_3