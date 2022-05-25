//---------- imports

// react
import React, { useEffect, useState } from 'react';
import { LogBox, StatusBar } from 'react-native';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation';

// splash screen
import SplashScreen from 'react-native-splash-screen'

// helper
import NavigationService from './src/navigation/NavigationService';


//---------- main app / component

const App = () => {

  // ignore logs
  LogBox.ignoreAllLogs()

  //---------- life cycle
  
  useEffect(() => {

    SplashScreen.hide();

  }, []);

  //---------- return main view

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <StackNaviagtion />
    </NavigationContainer>
  )
}

//---------- export component 

export default App;