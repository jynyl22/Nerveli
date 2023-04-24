import React from 'react';
import { Image, View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import GreenHeader from '../../components/headers/green_header';

const HomePage = ({navigation}) =>{

    return(
        <View style = {styles.container}>
            <GreenHeader title={'NERVELI'}/>

            <View styles = {styles.recommendations_card}>
                <Image styles = {styles.recommendations_rectangle} source={require('../../assets/home-page/recommendations_rectangle.png')}/>
                <View style={styles.recommendations_card_content}>
                    <Text style={styles.recommendations_date}>August 11, 2022</Text>
                    <Text style={styles.recommendations_title}>Today's {'\n'}recommendations</Text>
                    <Image style={styles.woman_icon} source={require('../../assets/home-page/woman.png')}/>
                    <Pressable style = {styles.view_button} onPress={() => navigation.navigate('Recommendations')}> 
                        {/* Put in real navigation later ^^^^ */}
                        <Text style = {styles.button_text}>View Now</Text>
                    </Pressable>
                </View>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
                {/* Put in real navigation later ^^^^ */}
                <View style = {styles.journal_card}>
                    <View style = {styles.journal_content}>
                        <Image style={styles.phone_icon} source={require('../../assets/home-page/phone.png')}/>
                        <Text style = {styles.journal_title}>How are you feeling today?</Text>
                        <Text style = {styles.journal_description}>Log today's journal entry to...</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style = {styles.health_history}>
                <Text style ={styles.health_text}>Health History</Text>
                <View style = {styles.health_category}>
                    <Image style={styles.icon} source={require('../../assets/home-page/sleep.png')}/>
                    <Text style={[styles.health_text, styles.health_category_text]}>Sleep</Text>
                </View>
                <View style = {styles.health_category}>
                    <Image style={styles.icon} source={require('../../assets/home-page/stress.png')}/>
                    <Text style={[styles.health_text, styles.health_category_text]}>Stress</Text>
                </View>
                <View style = {styles.health_category}>
                    <Image style={styles.icon} source={require('../../assets/home-page/pain.png')}/>
                    <Text style={[styles.health_text, styles.health_category_text]}>Pain level</Text>
                </View>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    recommendations_card:{
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    recommendations_card_content:{
        position: 'absolute',
        top: 0,
        left: 24,
        right: 0,
        bottom: 0,
    },
    recommendations_date:{
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: 18,
        color: 'white',
        marginTop: 22,
    }, 
    recommendations_title:{
        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontSize: 20,
        color: 'white',
        marginTop: 10
    },
    woman_icon:{
        position: 'absolute',
        top: 35,
        bottom: 0,
        left: 210,
        right: 0,
        width: 133,
        height: 144
    },
    journal_card:{
        backgroundColor: '#EEF5ED',
        marginTop: 30,
        width: 372,
        height: 99,
        borderRadius: 20
    },
    journal_title:{
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 20,
        color: '#2B2B2B',
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    journal_description:{
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 15,
        color: '#2B2B2B',
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 80
    },
    phone_icon:{
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 0,
        right: 0,
        width: 55,
        height: 73
    },
    health_history:{
        flex: 1,
        alignSelf: 'flex-start',
        marginHorizontal: 26,
        marginTop: 40
    },
    health_text:{
        fontFamily:'Open Sans',
        fontWeight: 700,
        fontSize: 18,
        color: 'black',
    },
    health_category:{
        flexDirection: 'row',
        marginTop: 30
    },
    health_category_text:{
        fontSize: 20,
    },
    icon:{
        marginRight: 7,
        width: 20,
        height: 20
    },
    view_button:{
        backgroundColor: '#FFD146',
        width: 114,
        hegiht: 29,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    },
    button_text:{
        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontSize: 15,
        marginVertical: 5,
        color: '#2B2B2B',
    }
});

export default HomePage