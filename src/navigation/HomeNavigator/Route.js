import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../container/DrawerContent';
import Home from '../../container/Home/Home';
import { createStackNavigator } from '@react-navigation/stack'
import { WHITE } from '../../constants/Colors';
import Subliminals from '../../container/Home/Subliminals/Subliminals';
import categoryList from '../../container/Home/Subliminals/categoryList';
import MusicScreen from '../../container/Home/Subliminals/MusicScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeNavigation(props) {
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
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
        </Drawer.Navigator>
    );
};

export default Route