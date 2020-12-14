import React, {useEffect, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

import NavScreen from '../screen/NavScreen';
import HomeScreen from '../screen/HomeScreen';

const width = Dimensions.get('window').width - 30;
const height = Dimensions.get('window').height - 150 - 30;

const SlidingScreens = props => {
    const scrollView = React.useRef();
    const {offset} = props;

    const initialOffset = {
        x: width,
        y: 0,
        animated: true
    };

    useEffect(() => {
        if (!offset) {
            scrollView.current.scrollTo(initialOffset);
        } else {
            scrollView.current.scrollTo(offset);
        }
    }, [offset, initialOffset]);

    return (
        <ScrollView
          style={{ flex: 1}}
          horizontal={true}
          scrollEventThrottle={0}
          pagingEnabled={true}
          showsHorizontalScrollIndicator = {false}
          overScrollMode = {'never'}
          onScroll = {props.onScroll}
          contentOffset = {{x: width, y: 0}}
          ref = {scrollView}
        >
          <View style={{ width, height }}>
            <NavScreen />
          </View>
          <View style={{ width, height }}>
            <HomeScreen />
          </View>
          <View style={{ width, height }}>
            <Text>Screen 3</Text>
          </View>
        </ScrollView>
    );

    
}

const styles = StyleSheet.create({
    
});

export default SlidingScreens;