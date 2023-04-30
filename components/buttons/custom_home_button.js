import { StyleSheet, View , TouchableOpacity, Text, Pressable} from "react-native";
import Svg, {Path} from 'react-native-svg'

export default CustomHomeButton = (props) => {
    const {children, onPress} = props;
    return (
        <View style = {styles.wrapper}>
            <Pressable
            onPress={onPress}
            style={[styles.homeButton]}>
                <Svg width={35} height={37} viewBox="0 0 35 37">
                    <Path
                    d="M12.2223 34.7305V29.0722C12.2236 28.7277 12.2925 28.3868 12.4249 28.0689C12.5574 27.7511 12.7509 27.4626 12.9944 27.2199C13.2379 26.9772 13.5267 26.785 13.8441 26.6543C14.1616 26.5237 14.5015 26.4571 14.8446 26.4584H20.1395C20.834 26.4581 21.5006 26.7335 21.9938 27.2247C22.2365 27.4663 22.4293 27.7537 22.5611 28.0703C22.6929 28.3869 22.7611 28.7266 22.7618 29.0698V34.728C22.7605 35.0249 22.8178 35.3191 22.9305 35.5936C23.0432 35.8681 23.209 36.1174 23.4183 36.3271C23.8438 36.7535 24.4204 36.9928 25.0215 36.9926H28.6335C30.3178 36.9995 31.9362 36.336 33.1346 35.1475C33.7251 34.5613 34.194 33.8633 34.5142 33.0939C34.8344 32.3245 34.9995 31.499 35 30.6652V14.5515C34.9994 13.8792 34.8512 13.2153 34.5661 12.607C34.2809 11.9987 33.8658 11.4611 33.3502 11.0323L21.0666 1.24967C20.0284 0.417897 18.7338 -0.0240722 17.406 -4.61973e-05C16.0781 0.0239798 14.8002 0.512495 13.7925 1.38129L1.78944 11.0335C1.24819 11.4487 0.806495 11.9805 0.496825 12.5897C0.187154 13.199 0.0173848 13.8701 0 14.5539L0 30.6516C0.00304994 31.4884 0.170227 32.3164 0.49198 33.0883C0.813733 33.8602 1.28376 34.5608 1.87521 35.1503C2.46665 35.7397 3.16794 36.2063 3.93899 36.5235C4.71005 36.8406 5.53576 37.0021 6.36898 36.9987H9.89642C10.4951 37.0007 11.0702 36.7649 11.4965 36.3428C11.9228 35.9207 12.1656 35.3464 12.1721 34.7453L12.2223 34.7305Z" 
                    fill="white"
                    />
                </Svg>
            </Pressable>

            <Text style={styles.labelStyle}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    homeButton: {
        position: 'absolute',
        top: -23,
        width: 67,
        height: 67,
        borderRadius: 67 / 2,
        backgroundColor: '#2BB673',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        fontSize: 11,
        color: 'black',
        fontFamily: 'OpenSans-Medium',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingTop: 50
    }
  });