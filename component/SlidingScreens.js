import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';

import NavScreen from '../screen/NavScreen';
import HomeScreen from '../screen/HomeScreen';
import MapScreen from '../screen/MapScreen';

const width = Dimensions.get('window').width - 30;
const height = Dimensions.get('window').height - 150 - 30;

const SlidingScreens = props => {
    const scrollView = React.useRef();
    const {offset} = props;

    useEffect(() => {
      if (offset) {
        scrollView.current.scrollToOffset(offset);
      }
    }, [offset]);

    const renderItemHandler = (item) => {
        return (
          <View style={{ width, height }}>
            {
              item.item === 1 ? <NavScreen />
              : item.item === 2 ? <HomeScreen /> 
              : <MapScreen />
            }
          </View>
        );
          }

    return (
        <FlatList
          style={{ flex: 1}}
          horizontal={true}
          scrollEventThrottle={0}
          pagingEnabled={true}
          showsHorizontalScrollIndicator = {false}
          overScrollMode = {'never'}
          onScroll = {props.onScroll}
          data = {[1, 2, 3]}
          renderItem = {renderItemHandler}
          ref = {scrollView}
          keyExtractor = {() => Math.random().toString()}
          initialScrollIndex = {1}
          getItemLayout={(_data, index) => (
            {length: width, offset: width * index, index}
          )}
        />
    );

    
}

const styles = StyleSheet.create({
    
});

export default SlidingScreens;