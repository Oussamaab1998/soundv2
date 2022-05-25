//---------- imports

// react
import * as React from 'react'

// navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'


// components
import Home from '../../container/Home/Home';
import Subliminals from '../../container/Home/Subliminals/Subliminals';
import categoryList from '../../container/Home/Subliminals/categoryList';
import MusicScreen from '../../container/Home/Subliminals/MusicScreen';
// drawer contents
import DrawerContent from '../../container/DrawerContent';

// heler
import { WHITE } from '../../constants/Colors';

// global stack veriable
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//---------- main app / component

function HomeNavigation(props) {

    //---------- return main view

    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: WHITE
                    },
                    headerTitle: () => null,
                }}
                name="HomeScreen" component={Home} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: WHITE
                    },
                    headerTitle: () => null,
                }}
                name="SubliminalsScreen" component={Subliminals} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: WHITE
                    },
                    headerTitle: () => null,
                }}
                name="categoryListScreen" component={categoryList} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: WHITE
                    },
                    headerTitle: () => null,
                }}
                name="MusicScreen" component={MusicScreen} />
        </Stack.Navigator>
    )
}

function Route() {

    //---------- return main view of drawer

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
        </Drawer.Navigator>
    );
};

//---------- export component

export default Route