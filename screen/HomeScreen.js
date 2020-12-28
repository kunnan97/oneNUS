import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weekIcon = <MaterialCommunityIcons name="calendar-week" size={24} color="white" />;

const HomeScreen = props => {
    return (
        <View style = {styles.container}>
            <View style = {{padding: '2%'}}>
                {weekIcon}
            </View>
            <Text style = {styles.week}>
                Week 11
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: '2%',
        paddingBottom: '5%',
        backgroundColor: '#44A1FF',
        flex: 1,
        borderRadius: 10
    },

    week: {
        fontSize: 29,
        color: "white"
    }
});

export default HomeScreen;