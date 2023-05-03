import React, { useState } from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'

const WelcomePage_2 = ({navigation}) =>{
    const title = 'Medical Expertise'
    const description = 'Welcome to a cutting edge pain\nmanagement solution developed by\nour team of neurosurgeons that\nprovides daily support.'
    const [currentPageIdx] = useState(1);

    return(
        <ScrollView overScrollMode="never">
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-2.png')}/>
                <WelcomeCard
                    title={title}
                    content={description}
                    navigation={navigation}
                    nextPage='WelcomePage_3'
                    buttonText='Continue'
                    currentPageIdx={currentPageIdx}
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

export default WelcomePage_2