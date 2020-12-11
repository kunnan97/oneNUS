import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    ScrollView
} from 'react-native';
import Constants from "expo-constants";

import TabContainer from '../component/TabContainer';

const MainScreen = props => {
    return (
        <ImageBackground
            style = {styles.screen}
            source = {require('../assets/background_mid.png')}
        >
            <TabContainer />

            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >

            </ScrollView>

            <StatusBar hidden = {true}/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default MainScreen;