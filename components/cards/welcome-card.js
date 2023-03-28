import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export const WelcomeCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.card_text_title}>{title}</Text>
      <Text style={styles.card_text_description}>{content}</Text>
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
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 20,
    color: '#2B2B2B',
    alignSelf: 'center',
  },
});

export default WelcomeCard;
