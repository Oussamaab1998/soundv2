import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";
import CheckBox from 'react-native-check-box'
import NavigationService from "../../navigation/NavigationService";

function SignUp({ navigation }) {

    const [onCheckClick, setOnCheckClick] = useState(false);

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <ScrollView showsVerticalScrollIndicator={false} style={[SpaceStyles.top5, SpaceStyles.padding10]}>
                <CustomText
                    text={'Sign Up'}
                    style={[TextStyles.textBold48Black, { alignSelf: 'center' }]}
                />
                <View style={[SpaceStyles.vertical2, SpaceStyles.top5]}>
                    <View style={SpaceStyles.alignSpaceBlock}>
                        <CustomTextInput
                            placeholder={'First Name'}
                            containerStyle={SpaceStyles.top1}
                            containerStyle={SpaceStyles.width37}
                        />
                        <CustomTextInput
                            placeholder={'Last Name'}
                            containerStyle={SpaceStyles.top1}
                            containerStyle={SpaceStyles.width37}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Email Address'}
                        containerStyle={SpaceStyles.top2}
                    />
                    <CustomTextInput
                        placeholder={'Password'}
                        containerStyle={SpaceStyles.top2}
                    />
                    <CustomTextInput
                        placeholder={'Confirm Password'}
                        containerStyle={SpaceStyles.top2}
                    />

                    <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                        <CheckBox
                            isChecked={onCheckClick}
                            checkBoxColor={'black'}
                            onClick={() => setOnCheckClick(!onCheckClick)}
                        />
                        <CustomText
                            text={'By continuing I agree to the Terms of Service'}
                            style={[TextStyles.textSegoe13Black, { marginLeft: 5 }]}
                        />
                    </View>
                    <CustomText
                        text={'Privacy Policy Disclaimer of  Liability and Intellectual Property Notice'}
                        style={[TextStyles.textSegoe13Black, { marginLeft: 3 }]}
                    />
                    <CustomTextInput
                        placeholder={'Card Number'}
                        containerStyle={SpaceStyles.top2}
                    />
                    <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top2]}>
                        <CustomTextInput
                            placeholder={'Expiry Month'}
                            containerStyle={SpaceStyles.width37}
                        />
                        <CustomTextInput
                            placeholder={'Expiry Year'}
                            containerStyle={SpaceStyles.width37}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'CVV'}
                        containerStyle={SpaceStyles.top2}
                    />
                    <TouchableOpacity style={[AuthStyles.largeButton, SpaceStyles.top5]} onPress={() => NavigationService.navigate('IntroApp')}>
                        <CustomText
                            text={'Start My Free Trial'}
                            style={TextStyles.textSegoe18White}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <SafeAreaView />
        </View>
    )
}

export default SignUp