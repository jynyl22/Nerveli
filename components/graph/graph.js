import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function DraggableBox({ boxSize }){
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dx, dy } = gestureState;
        const newX = Math.min(Math.max(0, dx), boxSize.width-(boxSize.width/6));
        const newY = Math.min(Math.max(0, dy), boxSize.height-(boxSize.width/6));
        setTranslateX(newX);
        setTranslateY(newY);
      },
    })
  ).current;

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const path = `M ${0},${0} Q ${0},${translateY+boxSize.width/12} ${translateX+boxSize.width/12},${translateY+boxSize.width/12}`;
  const path2 = `M ${translateX+boxSize.width/12},${translateY+boxSize.width/12} Q ${boxSize.width},${translateY+boxSize.width/12} ${boxSize.width},${boxSize.height}`;

  const styles = StyleSheet.create({
    circle: {
      backgroundColor: 'white',
      borderRadius: boxSize.width / 2, // Circle shape
      width: boxSize.width/6,
      height: boxSize.width/6,
      transform: [{ translateX }, { translateY }],
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 10,
      position: 'absolute',
      top:boxSize.y,
      left:boxSize.x

    },
    box: {
          backgroundColor: 'clear',
          borderRadius: 10,
          width: boxSize.width,
          height: boxSize.height,
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 10,
          top:boxSize.y,
          left:boxSize.x
        },
  });

  return (
    <View style = {{height:boxSize.height}}>
        <View style={styles.box}/>
        <View style={{top:-boxSize.height+boxSize.y, left:boxSize.x}}>
            <Svg height="100%" width="100%" >
                <Path d={path} stroke="black" strokeWidth="3" fill="transparent" />
                <Path d={path2} stroke="black" strokeWidth="3" fill="transparent" />
            </Svg>
        </View>

        <View style={styles.circle} {...panResponder.panHandlers} />

    </View>
  );
};
