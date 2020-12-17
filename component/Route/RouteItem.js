import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const busIcon = <FontAwesome5 name="bus" size={25} color="black" />;
const timeIcon = <MaterialCommunityIcons name="timelapse" size={24} color="black" />;
const busStopIcon = <MaterialCommunityIcons name="bus-stop" size={24} color="black" />;

const RouteItem = props => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandResult = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <View>
            <TouchableOpacity style = {styles.itemContainer} activeOpacity = {0.6} onPress = {expandResult}>

                <View style = {styles.summary}> 
                    {busIcon}

                    <Text style = {styles.text}>
                        {props.buses}
                    </Text>
                </View>

                <View style = {styles.summaryIcons}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        {timeIcon}
                        <Text style = {{marginLeft: 6}}>
                            {props.time}
                        </Text>
                    </View>
                    
                    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        {busStopIcon}
                        <Text style = {{marginLeft: 6}}>
                            {props.numBusStop}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>

            {isExpanded ?
                <View style = {{flexDirection: 'row', marginLeft: 10}}>
                    <View>
                        {props.route.route.map(item => {
                            return (
                                <Image 
                                    source = {
                                        item.includes('Start') ? require('../../assets/ic_thick_top.png')
                                        : item.includes('Arrive') ? require('../../assets/ic_thick_bottom.png')
                                        : item.includes(' min') ? require('../../assets/ic_thick_connector.png')
                                        : item.includes(' to ') ? require('../../assets/ic_thick_middle.png')
                                        : null
                                     }
                                     style = {{width: 39, height: 39}}
                                     key = {item}
                                     
                                />
                        )
                        })}
                    </View>

                    <View style = {{marginLeft: 10}}>
                        {props.route.route.map(item => {
                            return (
                                <Text 
                                    style = {{
                                        marginVertical: 10, 
                                        fontStyle: item.includes(' min') ? 'italic' : null,
                                        fontWeight: item.includes(' min') ? null : 'bold'
                                    }}
                                    key = {item}
                                >
                                    {item.replace("_n", "\n")}
                                </Text>
                            )
                    })}
                    </View>
                </View> 
                : null }
        </View>
        
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        height: 80,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        marginVertical: 1,
        marginHorizontal: 3
    },

    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20
    },

    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '70%',
        marginLeft: 4
    },

    summaryIcons: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default RouteItem;