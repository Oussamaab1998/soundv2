//---------- imports

// react
import React, { useEffect, useState } from 'react';

// navigations
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigator/AuthNavigation';
import Route from './HomeNavigator/Route';


// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {

  // temp veriable for navigation change
  let isLogin = false

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName='AuthNavigator'
    >

      <Stack.Screen
        options={{ headerShown: false }}

        name="Route"
        component={Route} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthNavigator"
        component={AuthNavigation} />
        
      {/* {
        isLogin ?
          <Stack.Screen
            options={{ headerShown: false }}

            name="Route"
            component={Route} />
          :
          <Stack.Screen
            options={{ headerShown: false }}
            name="AuthNavigator"
            component={AuthNavigation} />
      } */}
    </Stack.Navigator>
  );
}

//---------- export component

export default StackNaviagtion;
