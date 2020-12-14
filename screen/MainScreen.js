import React, {useState} from 'react';
import {
    StyleSheet,
    ImageBackground,
    StatusBar,
    View,
    Dimensions
} from 'react-native';

import TabContainer from '../component/TabContainer';
import SlidingScreens from '../component/SlidingScreens';

const width = Dimensions.get('window').width - 30;
const height = Dimensions.get('window').height - 150 - 30;

const MainScreen = props => {
    const initialOffset = {
        x: width,
        y: 0,
        animated: true
    };
    const [isBusScreen, setIsBusScreen] = useState(false);
    const [isHomeScreen, setIsHomeScreen] = useState(true);
    const [isMapScreen, setIsMapScreen] = useState(false);
    const [offset, setOffset] = useState(initialOffset);

    const setScreen = (bus, home, map) => {
        setIsBusScreen(bus)
        setIsHomeScreen(home)
        setIsMapScreen(map)
    }

    const scrollHandler = (event) => {
        const screenWdithEstimate = event.nativeEvent.contentOffset.x;
        if (screenWdithEstimate < width / 2) {
            setScreen(true, false, false);
        } else if ((width - (width/ 10)) < screenWdithEstimate && screenWdithEstimate < (width + (width/ 10))) {
            setScreen(false, true, false);
        } else if ((width + (width / 2)) < screenWdithEstimate) {
            setScreen(false, false, true);
        }
    }

    const onPressIconHandler = (bus, home, map) => {
        const newOffset = {
            x: bus ? 0 : (home ? width : width * 2),
            y: 0,
            animated: true
        }
        setOffset(newOffset)
    }

    return (
        <ImageBackground
            style = {styles.screen}
            source = {require('../assets/background_mid.png')}
        >
            <TabContainer 
                isBusScreen = {isBusScreen}
                isHomeScreen = {isHomeScreen}
                isMapScreen = {isMapScreen}
                onPressIcon = {onPressIconHandler}
            />
            
            <View style = {styles.content}>
                <SlidingScreens 
                    onScroll = {scrollHandler}
                    offset = {offset}
                />
            </View>
            
            <StatusBar hidden = {true}/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingBottom: 30,
        paddingLeft: 15, 
        paddingRight: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
        elevation: 2
    },

    screen: {
        flex: 1
    }
});

export default MainScreen;