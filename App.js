import React, { useEffect, useState } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation';
import NavigationService from './src/navigation/NavigationService';

const App = () => {

  LogBox.ignoreAllLogs()

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <StackNaviagtion />
    </NavigationContainer>
  )
}

export default App;