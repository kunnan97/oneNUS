import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const TabIcon = props => {
    const combinedStyles = {
        ...styles.iconNotClickedContainer,
        ...props.style        
    };

    const onPressHandler = () =>
        props.onPress(
            props.bus ? true : false, 
            props.home ? true : false, 
            props.map ? true : false
        );

    if (Platform.OS === 'ios') {
        return (
            <TouchableOpacity
                style = {combinedStyles}
                onPress = {onPressHandler}
            >
                {props.iconType}        
            </TouchableOpacity> 
        );
    } else {
        return (
            <TouchableNativeFeedback
                background = {TouchableNativeFeedback.Ripple(null, true)}
                onPress = {onPressHandler}
            >
                <View style = {combinedStyles}>
                    {props.iconType}
                </View>
            </TouchableNativeFeedback> 
        );
    }
}
const styles = StyleSheet.create({
    iconNotClickedContainer :{
        marginHorizontal: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        height: '30%'
      }
});

export default TabIcon;