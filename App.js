import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome5  } from '@expo/vector-icons';



export default function App() {
  const busIcon = <MaterialCommunityIcons name="bus-side" size={40} color="black" />;
  const homeIcon = <AntDesign name="home" size={35} color="black" />;
  const mapIcon = <FontAwesome5 name="route" size={30} color="black" />;

  const [isBusPressed, setIsBusPressed] = useState(false);
  const [isHomePressed, setIsHomePressed] = useState(true);
  const [isMapPressed, setIsMapPressed] = useState(false);

  const Touchable = TouchableOpacity;

  const onPressIconHandler = (bus, home, map) => {
      setIsBusPressed(bus);
      setIsHomePressed(home)
      setIsMapPressed(map)
  }

  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {styles.screen}>
        <View style = {styles.tabsContainer}>

          <Touchable
            style = {
              isBusPressed ? styles.iconClickedContainer 
              : styles.iconNotClickedContainer
            }
            onPress = {() => onPressIconHandler(true, false, false)}
          >
            {busIcon}
          </Touchable>

          <Touchable
            style = {
              isHomePressed ? styles.iconClickedContainer 
              : styles.iconNotClickedContainer
            }
            onPress = {() => onPressIconHandler(false, true, false)}
          >
            {homeIcon}
          </Touchable>

          <Touchable
            style = {
              isMapPressed ? styles.iconClickedContainer 
              : styles.iconNotClickedContainer
            }
            onPress = {() => onPressIconHandler(false, false, true)}
          >
            {mapIcon}
          </Touchable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  tabsContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    marginTop: '10%'
  },

  iconClickedContainer: {
    marginHorizontal: '2.5%',
    borderColor: 'black',
    borderBottomWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%'
  },

  iconNotClickedContainer :{
    marginHorizontal: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%'
  }
});
