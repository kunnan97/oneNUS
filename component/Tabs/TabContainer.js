import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import TabIcon from './TabIcon';

const busIcon = <MaterialCommunityIcons name="bus-side" size={38} color="#272B34" />;
const homeIcon = <AntDesign name="home" size={35} color="#272B34" />;
const mapIcon = <FontAwesome5 name="route" size={30} color="#272B34" />;

const TabContainer = props => {
    const [isBusPressed, setIsBusPressed] = useState(false);
    const [isHomePressed, setIsHomePressed] = useState(true);
    const [isMapPressed, setIsMapPressed] = useState(false);

    const {isBusScreen, isHomeScreen, isMapScreen, onPressIcon} = props;

    const onPressIconHandler = (bus, home, map) => {
        setIsBusPressed(bus);
        setIsHomePressed(home);
        setIsMapPressed(map);
        onPressIcon(bus, home, map);
    }

    useEffect(() => {
        setIsBusPressed(isBusScreen);
        setIsHomePressed(isHomeScreen);
        setIsMapPressed(isMapScreen);
    }, [isBusScreen, isHomeScreen, isMapScreen]);

    return (
        <View style={styles.tabsContainer}>

            <TabIcon
              style={isBusPressed ? styles.iconClickedContainer : null}
              iconType={busIcon}
              onPress={onPressIconHandler}
              bus={true}
            />

            <TabIcon
              style={isHomePressed ? styles.iconClickedContainer : null}
              iconType={homeIcon}
              onPress={onPressIconHandler}
              home={true}
            />

            <TabIcon
              style={isMapPressed ? styles.iconClickedContainer : null}
              iconType={mapIcon}
              onPress={onPressIconHandler}
              map={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 150,
        paddingBottom: 30
    },

    iconClickedContainer: {
        borderColor: '#272B34',
        borderBottomWidth: 5
    }
});

export default TabContainer;