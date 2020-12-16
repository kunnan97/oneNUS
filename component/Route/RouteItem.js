import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const busIcon = <FontAwesome5 name="bus" size={30} color="black" />;

const RouteItem = props => {
    return (
        <View style = {styles.itemContainer}>

            <View style = {styles.summary}> 
                {busIcon}

                <Text style = {styles.text}>
                    {props.buses}
                </Text>
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 2,
        height: 100,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },

    text: {
        fontWeight: 'bold',
        fontSize: 40,
        marginLeft: 20
    },

    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '70%'
    }
});

export default RouteItem;