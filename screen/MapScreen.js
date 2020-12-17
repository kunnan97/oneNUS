import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Popover from 'react-native-popover-view';

import BusButton from '../component/Map/BusButton';
import BusMap from '../component/Map/BusMap';

const busNumbers = ["A1", "A2", "B1", "B2", "C", "D1", "D2", "BTC1", "BTC2", "A1E", "A2E"]

const MapScreen = props => {
    const [visible, setVisible] = useState(false);
    const [busSelected, setBusSelected] = useState();

    const onPressHandler = title => {
        setVisible(true)
        setBusSelected(title)
    }

    return (
        <View style = {styles.buttonContainer}> 

            {busNumbers.map(busNumber => {
                return (
                    <BusButton 
                        title = {busNumber}
                        onPress = {onPressHandler}
                        key = {busNumber}
                    /> 
                );
            })}

            <Popover 
                isVisible={visible} 
                onRequestClose={() => setVisible(false)} 
                style = {styles.modalContainer}
                popoverStyle = {{
                    borderRadius: 20
                }}
            >
                <BusMap 
                    bus = {busSelected}
                />
            </Popover>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },

    modalContainer: {
        width: '80%',
        height: '80%'
    }
});

export default MapScreen;