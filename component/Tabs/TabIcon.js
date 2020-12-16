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

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;  
    
    return (
        <View style = {combinedStyles}>
            <Touchable 
                onPress = {onPressHandler}
                background = {TouchableNativeFeedback.Ripple(null, true)}
                ref = {props.ref}
            >
                <View>
                    {props.iconType}
                </View>
            </Touchable>
        </View>
    );
}
const styles = StyleSheet.create({
    iconNotClickedContainer :{
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
      }
});

export default TabIcon;