import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';

import {busRoutes} from '../../Coordinates';

const removeDuplicate = arr => {
    const noDuplicate = [];

    arr.forEach(element => {
        if (!noDuplicate.includes(element)) {
            noDuplicate.push(element)
        }
    });
    return noDuplicate;
}

const BusMap = props => {
    useEffect(() => {
        Permissions.getAsync(Permissions.LOCATION)
        .then(objStatus => {
            if (objStatus.status !== 'granted') {
                return Permissions.askAsync(Permissions.LOCATION);
            }
            return objStatus;
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const {bus} = props;

    const [busInfo, setBusInfo] = useState(busRoutes[bus]);

    useEffect(() => {
        setBusInfo(busRoutes[bus])
    }, [bus])

    const mapRegion = {
        latitude: 1.295403,
        longitude: 103.776277,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.1421
    }

    return (
        <MapView
            style = {styles.map}
            region = {mapRegion}
            provider = {"google"}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            minZoomLevel = {14.7}
        >
            <MapViewDirections
                origin={busInfo.init ? {latitude: busInfo.init[0], longitude: busInfo.init[1]} : null}
                destination={busInfo.dest ? 
                    {latitude: busInfo.dest[0], longitude: busInfo.dest[1]}
                    : busInfo.init ? 
                    {latitude: busInfo.init[0], longitude: busInfo.init[1]} : null
                }
                apikey={'AIzaSyDguEfZ0MN04nTBRyfuPtx9XkqYPoKFxHY'}
                strokeWidth = {5}
                strokeColor = {'#4092FF'}
                waypoints = {busInfo.wayPoints ? busInfo.wayPoints.map(coord => {
                    return (
                        {
                            latitude: coord[0],
                            longitude: coord[1]
                        } 
                    );
                }) : null}
            />

            {busInfo.init ? 
                <Marker coordinate = {{latitude: busInfo.init[0], longitude: busInfo.init[1]}}/> : null
            }
            {busInfo.dest ? 
                <Marker coordinate = {{latitude: busInfo.dest[0], longitude: busInfo.dest[1]}}/> : null
            }

            {busInfo.wayPoints ? 
                removeDuplicate(busInfo.wayPoints).map(coord => {
                    return(
                        <Marker coordinate = {{latitude: coord[0], longitude: coord[1]}} key = {coord}/>
                    );
                }) : null
            }

            <View style = {styles.busTitleContainer}>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'white'
                        
                    }}>
                        {props.bus}
                    </Text>
            </View>
            

        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.6
    },

    busTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(128,128,128, 0.6)'
    }
});

export default BusMap;