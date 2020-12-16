import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';

import RouteItem from './RouteItem';

const ResultRoutesList = props => {
    const renderItem = (item) => {
        return (
            <RouteItem
                buses = {item.item.buses}
                start = {item.item.start}
                end = {item.item.end}
                time = {item.item.time}
                route = {{route: item.item.route}}
            />
        );
    }

    return (
        <FlatList
            data = {props.data}
            renderItem = {renderItem}
            keyExtractor = {() => Math.random().toString()}
        />
    );
}

const styles = StyleSheet.create({
    
});

export default ResultRoutesList;