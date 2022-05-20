import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import NavigationService from "../../navigation/NavigationService";
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

function Login({ navigation }) {
    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={[SpaceStyles.top14, SpaceStyles.padding10]}>
                <CustomText
                    text={'Login'}
                    style={[TextStyles.textBold48Black, { alignSelf: 'center' }]}
                />
                <View style={[SpaceStyles.vertical2, SpaceStyles.top10]}>
                    <CustomTextInput
                        placeholder={'Email'}
                        containerStyle={SpaceStyles.top1}
                    />
                </View>
                <View style={SpaceStyles.vertical1}>
                    <CustomTextInput
                        placeholder={'Password'}
                        containerStyle={SpaceStyles.top1}
                    />
                    <CustomText
                        text={'Forgot your password?'}
                        style={[TextStyles.textSegoe14Black, SpaceStyles.top1, { textAlign: 'right' }]}
                    />
                </View>
                <TouchableOpacity style={[AuthStyles.smallButton, SpaceStyles.top5]}>
                    <CustomText
                        text={'Sign in'}
                        style={TextStyles.textSegoe18White}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationService.navigate('SignUp')}>
                    <CustomText
                        text={'Create Account'}
                        style={[TextStyles.textSegoe18Black, SpaceStyles.top10, { textAlign: 'center' }]}
                    />
                </TouchableOpacity>
            </View>
            <SafeAreaView />
        </View>
    )
}

export default Login