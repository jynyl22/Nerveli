import React,{useState} from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Star_Rating(){
    const [starRating, setStarRating] = useState(null)
    return (
      <View style={styles.container}>
      <View style={styles.stars}>
        <TouchableOpacity onPress={() => setStarRating(1)}>
          <MaterialIcons
            name={starRating >= 1 ? 'star' : 'star-border'}
            size={32}
            style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStarRating(2)}>
          <MaterialIcons
            name={starRating >= 2 ? 'star' : 'star-border'}
            size={32}
            style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStarRating(3)}>
          <MaterialIcons
            name={starRating >= 3 ? 'star' : 'star-border'}
            size={32}
            style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStarRating(4)}>
          <MaterialIcons
            name={starRating >= 4 ? 'star' : 'star-border'}
            size={32}
            style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStarRating(5)}>
          <MaterialIcons
            name={starRating >= 5 ? 'star' : 'star-border'}
            size={32}
            style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
          />
        </TouchableOpacity>
      </View>
    </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    stars: {
      display: 'flex',
      flexDirection: 'row',
    },
    starUnselected: {
      color: '#2BB673',
    },
    starSelected: {
      color: '#2BB673',
    },
  });