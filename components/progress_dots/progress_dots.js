import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const PAGE_COUNT = 5;

export const ProgressDots = ({ currentPageIdx }) => {
  const [ellipses] = useState(Array(PAGE_COUNT).fill(false));
  ellipses[currentPageIdx] = true;

  const renderItem = ({ index }) => (
    <View
      style={[styles.ellipse, ellipses[index] ? styles.active : styles.inactive]}
    />
  )
  return(
    <FlatList
      data={ellipses}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
};

const styles = StyleSheet.create({
  ellipse: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  active: {
    backgroundColor: '#2B2B2B'
  },
  inactive: {
    backgroundColor: '#C4C4C4'
  },
})

export default ProgressDots;