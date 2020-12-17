import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const BusButton = props => {
    return (
        <TouchableOpacity
            style = {styles.buttonContainer}
            onPress = {() => props.onPress(props.title)}
        >
            <Text style = {styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '30%',
        height: '15%',
        backgroundColor: 'white',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
        elevation: 2
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default BusButton;