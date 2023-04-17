import React, { useState } from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'


const WelcomePage_5 = ({navigation}) =>{
    const title = 'Your Journey Begins'
    const description = 'A video guided tutorial will show\nyou step by step how our test\n works. So, are you ready to begin\nyour unique journey? We have your\nback!'
    const [currentPageIdx] = useState(4);

    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-5.png')}/>
                <WelcomeCard
                    title={title}
                    content={description}
                    navigation={navigation}
                    buttonText='Finish'
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

export default WelcomePage_5