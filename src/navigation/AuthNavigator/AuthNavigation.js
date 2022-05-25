//---------- imports

// react
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// components
import Login from '../../container/Auth/Login';
import SignUp from '../../container/Auth/SignUp';
import IntroApp from '../../container/Auth/IntroApp';

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function AuthNavigation(props) {

    //---------- return main view

    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            options={{ headerShown: false }}
        >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login" component={Login} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SignUp" component={SignUp} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="IntroApp" component={IntroApp} />

        </Stack.Navigator>
    )
}

//---------- export component

export default AuthNavigation