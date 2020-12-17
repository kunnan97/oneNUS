import React, {useState} from 'react';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

import MainScreen from './screen/MainScreen';

const fetchImage = () => {
  return Asset.loadAsync([
    require('./assets/ic_thick_top.png'),
    require('./assets/ic_thick_bottom.png'),
    require('./assets/ic_thick_connector.png'),
    require('./assets/ic_thick_middle.png')
  ])
}

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!imageLoaded) {
    return (
      <AppLoading 
        startAsync = {fetchImage}
        onFinish = {() => setImageLoaded(true)}
        onError = {err => {console.log(err)}}/>
    );
  }
  return (
        <MainScreen />
  );
};
