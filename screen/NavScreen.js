import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Dimensions
} from 'react-native';
import {firebaseConfig, convertToFirestore} from '../Config';
import * as firebase from 'firebase'
import 'firebase/firestore';

import SearchContainer from '../component/Search/SearchContainer';
import Route from '../model/Route';
import ResultRoutesList from '../component/Route/ResultRoutesList';

const NavScreen = props => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    const [startQuery, setStartQuery] = useState();
    const [endQuery, setEndQuery] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const [searchRoutes, setSearchedRoutes] = useState();

    const onStartTextChangeHandler = (text) => {
        setStartQuery(text);
    };

    const onEndTextChangeHandler = (text) => {
        setEndQuery(text);
    };

    const searchHandler = async () => {
        if (!startQuery || !endQuery) {
            Alert.alert("One of the fields are missing!");
            return;
        }

        let start = convertToFirestore(startQuery.toUpperCase().trim());
        let end = convertToFirestore(endQuery.toUpperCase().trim());
        setIsLoading(true);
        
        const result = await fetchRoutes(start, end);

        if (result.empty) {
            Alert.alert("No routes found! Try again.");
            return;
        }  

        const routes = [];
          
        result.forEach(doc => {
            const document = doc.data();

            const route = new Route(
                document.Buses,
                document.Start,
                document.End,
                document["Time Taken"],
                document.numBusStop,
                document.Route
            );

            routes.push(route);
        });

        setSearchedRoutes(routes);
        setIsLoading(false);
    };

    const fetchRoutes = async (start, end) => {
        const ref = db.collection("Bus Routes")
                        .doc(start)
                        .collection(end)
                        .doc("1")
                        .collection("Route");

        const snapshot = await ref.get();
        return snapshot;
    };

    const clearResult = () => {
        setSearchedRoutes();
        setStartQuery();
        setEndQuery();
    }

    return (
        <View style = {{backgroundColor: 'white', height: Dimensions.get('window').height - 150 - 30, borderRadius: 10}}>
            <SearchContainer 
                onChangeStartText = {onStartTextChangeHandler}
                onChangeEndText = {onEndTextChangeHandler}
                searchHandler = {searchHandler}
                clearResult = {clearResult}
                isLoading = {isLoading}
            />

            <ResultRoutesList
                data = {searchRoutes}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
});

export default NavScreen;