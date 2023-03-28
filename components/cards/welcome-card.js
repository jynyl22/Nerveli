import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export const WelcomeCard = ({ title, content, nextPage, navigation, buttonText }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.card_text_title}>{title}</Text>
      <Text style={styles.card_text_description}>{content}</Text>

      <View style = {styles.button}>
        <Pressable style = {styles.continuebutton} onPress={() => navigation.navigate(nextPage)}>
            <Text style = {styles.buttonfont}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>

 
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF5ED',
    marginTop: 30,
    paddingHorizontal: 30
  },
  card_text_title: {
    fontFamily: 'Lato',
    fontWeight: 800,
    fontSize: 25,
    color: '#2B2B2B',
    marginTop: 50,
    paddingVertical: 20,
    alignSelf: 'center'
  },
  card_text_description: {
    flex: 1,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 20,
    color: '#2B2B2B',
    justifyContent: 'center',
    textAlign: 'center',
  },
  continuebutton:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 49,
    marginTop: 60,
    marginBottom: 60,
    marginHorizontal:25,
    borderRadius: 20,
    backgroundColor: '#2BB673',
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

export default WelcomeCard;
