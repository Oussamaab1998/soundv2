import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView } from 'react-native'
import { splashLog } from "../../constants/Images";
import NavigationService from "../../navigation/NavigationService";
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";

function SpalshScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => { navigation.navigate('Login') }, 3000);
    }, []);

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={SpaceStyles.flexCenter}>
                <Image source={splashLog} resizeMode='contain' />
            </View>
            <SafeAreaView />
        </View>
    )
}

export default SpalshScreen