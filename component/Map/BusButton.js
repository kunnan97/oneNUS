import React from 'react';
import {
    Text,
    StyleSheet,
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
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#272B34'
    }
});

export default BusButton;