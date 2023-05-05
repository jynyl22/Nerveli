import React from 'react';
import { View,Text,StyleSheet,Image, ScrollView,TouchableOpacity,Pressable, Platform } from 'react-native';
const NPA_Results = ({navigation}) =>{
    return(
        <ScrollView overScrollMode="never">
            <View style = {{backgroundColor:'#EEF5ED',height:350,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style = {styles.backButton}source={require('../../assets/NPA-Results-pics/back_arrow.png')}></Image >
                    </TouchableOpacity>
                <View style={styles.container}>
                    <Text style ={{textAlign:'center',fontFamily:'Raleway',fontWeight:'bold',fontSize:25,marginHorizontal:70}}>Hi, Jane! Here are your NPA results:</Text>
                    <Image style = {{alignSelf:'center',resizeMode: 'contain',width:200}} source={require('../../assets/NPA-Results-pics/2_doctors.png')}></Image>
                    <View style={{backgroundColor:'#2BB673',position:'absolute',alignSelf: 'center',width:"90%",height:80,top:205,borderRadius:20,}}>
                        <Text style ={{paddingTop:10,paddingLeft:20,fontFamily:'Lato',fontWeight:'bold',color:'black',fontSize:15}}>Do you want to retake the survey?</Text>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {{paddingLeft:20,color:'white',fontFamily:'Lato',fontWeight:'bold',fontSize:15,flex:1.5}}>The more accurate you, the better you will feel</Text>
                            <View style = {{paddingRight:20,paddingTop:12,flex:0.8}}>
                            <Pressable style={{alignItems: 'center',justifyContent: 'center',backgroundColor: 'white',borderRadius:12,}} onPress={() => navigation.navigate('Overview')}>
                                <Text style = {{color:'#2BB673',fontFamily:'Lato',fontWeight:'bold',fontSize:15}}>Retake</Text>
                            </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {styles.box_container1}>
                <Text style = {styles.headerText}>Diagnosis:Temperature Sensitive</Text>
                <Text style = {styles.baseText}>Hot and cold sensations, and sometimes pressure, may trigger pain...</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NPA_Diagnosis')}>
                    <Text style = {styles.learnText}> Learn more</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.box_container2}>
                <Text style = {styles.headerText}>Pain Triggers</Text>
                <Text style = {styles.baseText}>There are two important triggers to consider. First, washing hands with hot water. Second, extraneous outdoor activities...</Text>
                <Text style = {styles.learnText}> Learn more</Text>
            </View>
            <View style = {styles.box_container3}>
                <Text style = {styles.headerText}>Immediate relief options</Text>
                <Text style = {styles.baseText}>1. Since you have sensitivity to heat, make sure you wash your hands in cooler than normal temperature...</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NPA_Relief')}>
                    <Text style = {styles.learnText}> Learn more</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ...Platform.select({
        android: {
            backButton: {
                marginTop:20,
                marginLeft:10,
            }
        },
        ios: {
            backButton: {
                marginTop:50,
                marginLeft:25,
            }
        }
    }),
    container:{
        justifyContent:'center',
        flexDirection:'column',
        alignContent: 'center',
    },
    box_container1:{
        marginTop:50,
        alignSelf:'center',
        borderColor:'#C4C4C4',
        borderWidth:1,
        borderRadius:20,
        width:"90%",
        height:170,
        //backgroundColor:'red'
    },
    box_container2:{
        marginTop:20,
        alignSelf:'center',
        borderColor:'#C4C4C4',
        borderWidth:1,
        borderRadius:20,
        width:"90%",
        height:170,
        //backgroundColor:'red'
    },
    box_container3:{
        marginTop:20,
        marginBottom:90,
        alignSelf:'center',
        borderColor:'#C4C4C4',
        borderWidth:1,
        borderRadius:20,
        width:"90%",
        height:170,
        //backgroundColor:'red'
    },
    headerText:{
        color:'#2BB673',
        fontFamily:'Raleway',
        fontWeight:'bold',
        fontSize:20,
        paddingTop:15,
        paddingLeft:20,
        paddingRight:35
    },
    baseText:{
        color:'black',
        fontFamily:'Lato',
        fontWeight:'normal',
        fontSize:18,
        paddingLeft:20,
        paddingRight:50,
    },
    learnText:{
        textDecorationLine: 'underline',
        fontFamily:'Lato',
        fontWeight:'bold',
        fontSize:15,
        color:'#2BB673',
        alignSelf:'flex-end',
        paddingRight:20,
    }
});
export default NPA_Results;