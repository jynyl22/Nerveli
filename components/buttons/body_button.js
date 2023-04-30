import {React,useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';

const BodyButtons = ({bodyPoints}, props) => {
    const [selected, setSelected] = useState([]);
    const [active, setActive] = useState([]);
    useEffect(() => {
        const kinds = [...new Set(selected)]
        kinds.map((kind) => {
            const curr = selected.filter(item => item.id === kind.id);
            if (curr.length % 2) {
                setActive([...active, {id: kind.id, name: kind.name}]);
            }
            else {
                setActive(active.filter(curr => curr.id !== kind.id));
            }
        })
        
    }, [selected])
    // useEffect(() => {
    //     console.log(active)
    // }, [active])
    return (
        <View style={styles.container}>
            {bodyPoints.map((point) => {
                const [pressed, setPressed] = useState(false);
                return (
                    <Pressable 
                    key={point.id}
                    style={[pressed ? styles.selected : styles.unselected, styles.button, point.wide ? styles.wide : null, {left: point.margLeft, top: point.margTop}]}
                    onPress={()=> {
                        setPressed(!pressed);
                        setSelected([...selected, {id: point.id, name: point.name}]);
                    }}/>
                )
            })}
        </View>
      );
        
}
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        alignSelf:'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: -15,
        marginLeft: -15
    },
    unselected:{
        backgroundColor: 'green',
        opacity: 0.5
    },
    selected: {
        backgroundColor: '#9d1600',
        opacity: 0.85
    },
    wide: {
        width: 70,
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default BodyButtons