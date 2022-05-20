import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SpalshScreen from '../../container/Auth/SpalshScreen';
import Login from '../../container/Auth/Login';
import SignUp from '../../container/Auth/SignUp';
import IntroApp from '../../container/Auth/IntroApp';
// import Route from '../HomeNavigator/Route';

const Stack = createStackNavigator();

function AuthNavigation(props) {
    return (
        <Stack.Navigator
            initialRouteName={'SpalshScreen'}
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SpalshScreen" component={SpalshScreen} />
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
            {/* <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Route" component={Route} /> */}
        </Stack.Navigator>
    )
}

export default AuthNavigation