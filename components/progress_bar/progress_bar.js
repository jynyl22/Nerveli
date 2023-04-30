import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

export const ProgressBar = ({currentProgress}) => {
    return (
        <ProgressBar
            style={styles.progress}
            color='#ffd146'
            borderColor='#f6f6f6'
            unfilledColor='#f6f6f6'
            progress={currentProgress}
            width={372}
        />
    );
};

const styles = StyleSheet.create({
    progress: {
        position: 'absolute',
        height: 5,
        left: 28,
        marginTop: 23,
    },
});

export default ProgressBar;