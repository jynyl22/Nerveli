import React from 'react';
import { Image, View, Text, Pressable, StyleSheet,ScrollView} from 'react-native';
import { WelcomeCard } from '../../components/cards/welcome-card'


const WelcomePage = ({navigation}) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.figure} source={require('../../assets/welcome-page/welcome-1.png')}/>
                <WelcomeCard
                    title={"Empathy"}
                    content={"We know that your journey to live a more pain free life can be frustrating. We have experienced it ourselves-but with Nervel-you are never alone."}
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
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});

export default WelcomePage