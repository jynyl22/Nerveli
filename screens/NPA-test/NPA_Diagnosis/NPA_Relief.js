import React from 'react';
import { View,Text,StyleSheet,Image, ScrollView,TouchableOpacity,Pressable } from 'react-native';
const NPA_Relief = ({navigation}) =>{
    return(
        <ScrollView overScrollMode="never">
            <View style ={{flexDirection:'row',}}>
                <TouchableOpacity onPress={() => navigation.navigate('NPA_Results')}>
                    <Image style = {{marginLeft:20,marginTop:20,width:20,height:20,resizeMode: 'contain',alignSelf:"flex-start"}}source={require('../../../assets/NPA-Results-pics/X.png')}></Image >
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style = {{textAlign:'center',fontFamily:'Raleway',fontWeight:'bold',fontSize:25,color:'#2BB673'}}>Learn More</Text>
                <Image style = {{width:250,height:250,resizeMode: 'contain',alignSelf:"center",marginTop:20}}source={require('../../../assets/NPA-Results-pics/Temperature_Relief.png')}></Image >
            </View>
            <View style ={{backgroundColor:'#EEF5ED',height:500}}>
                <Text style ={{fontFamily:'Raleway',fontWeight:'bold',fontSize:25,marginLeft:30,color:'#2BB673',marginVertical:20}}>Diagnosis: Temperature Sensitive</Text>
                <View style = {{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                    <View style = {styles.circle}>
                        <Text style = {styles.emoji}>❄️</Text>
                    </View>
                    <Text style = {styles.baseText}>Since you have sensitivity to heat, make sure you wash your hands in cooler than normal temperature</Text>
                </View>
                <View style = {{justifyContent:'center',flexDirection:'row',marginTop:30,alignItems:'center'}}>
                    <View style = {styles.circle}>
                        <Text style = {styles.emoji}>🏕</Text>
                    </View>
                    <Text style = {styles.baseText}>Minimize strenuous activity outdoors on hot days</Text>
                </View>
                <View style = {{justifyContent:'center',flexDirection:'row',marginTop:30,alignItems:'center'}}>
                    <View style = {styles.circle}>
                        <Text style = {styles.emoji}>😖</Text>
                    </View>
                    <Text style = {styles.baseText}>Generally you should avoid heat pads, and use ice packs instead on areas that are painful</Text>
                </View>
                <View style = {{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate('Journal_1')}>
                        <Text style = {styles.buttonfont}>Visit your Pain Journal</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flexDirection:'column',
        alignContent: 'center',
    },
    circle:{
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#2BB673',
        justifyContent:'center',
        marginLeft:30,
    },
    emoji:{
        fontWeight:'bold',
        color:'black',
        fontFamily:'Lato',
        textAlign:'center',
        fontSize:38
    },
    baseText:{
        color:'black',
        fontFamily:'Lato',
        fontWeight:'normal',
        fontSize:18,
        paddingLeft:10,
        flexWrap: 'wrap',
        flex:1
    },
    continuebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: 49,
        borderRadius: 20,
        backgroundColor: '#2BB673',
    },
    buttonfont:{
        color:'white',
        fontFamily:'Open Sans',
        fontSize:18
    },
})
export default NPA_Relief;

//Temperature_Relief.png