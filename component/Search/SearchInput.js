import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Text
} from 'react-native';

const SearchInput = props => {
    const inputRef = React.createRef();

    const [loc, setLoc] = useState();

    const {toClear, location} = props;

    useEffect(() => {
        setLoc(location);
    }, [location])

    useEffect(() => {
        inputRef.current.clear();
        setLoc();
    }, [toClear])

    return (
        <View style = {{flexDirection: 'row'}}>
            <TextInput 
                style = {styles.input}
                placeholder = {props.type + " Location"}
                placeholderTextColor = "white"
                ref = {inputRef}
                value = {loc ? loc.lat + "," + loc.lng : null}
                onChangeText = {props.onChangeText}
            />

            <View style = {styles.iconContainer}>
                {props.isLoading ? 
                    <ActivityIndicator size = 'small' color = {"white"}/>
                    :
                    <TouchableOpacity onPress = {props.onPress}>
                        {props.sideIcon}
                    </TouchableOpacity>
                }
                
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 40,
        fontSize: 18,
        color: 'white'
    },

    iconContainer: {
        position: 'absolute',
        right: 0,
        width: '20%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchInput;