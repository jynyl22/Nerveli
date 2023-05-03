import React, { useState } from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'


const WelcomePage_1 = ({navigation}) =>{
    const title = 'Empathy'
    const description = 'We know that your journey to live a\nmore pain free life can be \nfrustrating. We have experienced it ourselves-but with Nerveli-you are never alone.'
    const [currentPageIdx] = useState(0);

    return(
        <ScrollView overScrollMode="never">
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-1.png')}/>
                <WelcomeCard
                    title={title}
                    content={description}
                    navigation={navigation}
                    nextPage='WelcomePage_2'
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

export default WelcomePage_1