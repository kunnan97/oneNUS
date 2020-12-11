import React, { useState } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import TabIcon from './TabIcon';

const busIcon = <MaterialCommunityIcons name="bus-side" size={40} color="black" />;
const homeIcon = <AntDesign name="home" size={35} color="black" />;
const mapIcon = <FontAwesome5 name="route" size={35} color="black" />;

const TabContainer = props => {
    const [isBusPressed, setIsBusPressed] = useState(false);
    const [isHomePressed, setIsHomePressed] = useState(true);
    const [isMapPressed, setIsMapPressed] = useState(false);

    const onPressIconHandler = (bus, home, map) => {
        setIsBusPressed(bus);
        setIsHomePressed(home);
        setIsMapPressed(map);
    }

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
        height: '30%',
        paddingBottom: '10%'
    },

    iconClickedContainer: {
        borderColor: 'black',
        borderBottomWidth: 5
    }
});

export default TabContainer;