import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const HomeScreen = props => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.week}>
                Week 11
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end', 
        padding: '10%',
        backgroundColor: '#96C3FF',
        flex: 1,
        borderRadius: 10
    },

    week: {
        fontSize: 30,
        color: "white"
    }
});

export default HomeScreen;