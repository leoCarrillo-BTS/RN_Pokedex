import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';


const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App