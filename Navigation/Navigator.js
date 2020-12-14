import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screen/HomeScreen';
import NavScreen from '../screen/NavScreen';

const Navigator = createStackNavigator(
    {
       nav: {
           screen: NavScreen,
           navigationOptions: {
               gestureDirection: 'horizontal-inverted'
           }
       },
       home: {
           screen: HomeScreen
       }
    },

    {
        defaultNavigationOptions: () => ({
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent'
          },
          gestureEnabled: true
        }),
        initialRouteName: 'nav'
    }
);

export default createAppContainer(Navigator);