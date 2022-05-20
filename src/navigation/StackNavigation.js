import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Route from './UserNavigator/Route';
import AuthNavigation from './AuthNavigator/AuthNavigation';

const Stack = createStackNavigator();

function StackNaviagtion(props) {

  return (
    <Stack.Navigator
      // initialRouteName={"AuthNavigator"}
      initialRouteName={"AuthNavigator"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
      {/* <Stack.Screen name="Route" component={Route} /> */}
    </Stack.Navigator>
  );
}

export default StackNaviagtion;
