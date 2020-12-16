import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'; 
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import SearchInput from './SearchInput';

const searchIcon = <FontAwesome name="search" size={37} color="black" />;
const clearIcon = <Entypo name="cross" size={30} color="black" />;
const locIcon = <MaterialIcons name="my-location" size={30} color="black" />;

const SearchContainer = props => {
    const [toClear, setToClear] = useState(false);
    const [location, setLocation] = useState();
    const [loadingLoc, setLoadingLoc] = useState(false);

    const clearHandler = () => {
        setToClear(!toClear);
        props.clearResult();
    };

    const requestLocPerm = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);

        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!', 
                'You need to grant location while using the app!', 
                [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    }

    const userLocHandler = async () => {
        const hasPermission = await requestLocPerm();

        if (!hasPermission) {
            return;
        }

        setLoadingLoc(true);
        const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
        setLoadingLoc(false);

        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }

    return (
        <View style = {styles.container}> 
            <View style = {styles.wordsContainer}>
                <Text style = {styles.text}>
                    Start:
                </Text>

                <Text style = {styles.text}>
                    End:
                </Text>
            </View>

            <View style ={styles.inputContainer}> 
                <SearchInput 
                    type = 'Start'
                    sideIcon = {locIcon}
                    toClear = {toClear}
                    onPress = {userLocHandler}
                    location = {location}
                    isLoading = {loadingLoc}
                    onChangeText = {props.onChangeStartText}
                />
                
                <SearchInput 
                    type = 'End'
                    sideIcon = {clearIcon}
                    onPress = {clearHandler}
                    toClear = {toClear}
                    onChangeText = {props.onChangeEndText}
                />                
            </View>
            
            <View style = {styles.searchIconContainer} >
                <TouchableOpacity
                    onPress = {props.searchHandler}
                >
                    {searchIcon} 
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4092FF',
        height: 160,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10
    },

    wordsContainer: {
        width: 70,
        height: 140,
        justifyContent: 'space-around',
        paddingLeft: 10
    },

    text: {
        color: "white",
        fontSize: 15
    },

    inputContainer: {
        height: 140,
        width: '65%',
        justifyContent: 'space-around'
    },

    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default SearchContainer;