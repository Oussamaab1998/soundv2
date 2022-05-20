import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, SafeAreaView, Text } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../../../components/CustomText";
import HeaderLeft from "../../../components/HeaderLeft";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import { backIcon, bagIcon, drawerIcon, musicIcon, splashLog, grayStarIcon, blackRoundIcon } from "../../../constants/Images";
import NavigationService from "../../../navigation/NavigationService";
import AuthStyles from "../../../style/AuthStyles";
import CommonStyles from "../../../style/CommonStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";

const data = [
    { name: 'glow from the inside out' },
    { name: 'hair is thick, glossy & fast-growing' },
    { name: 'highlight your inner goddess beauty' },
    { name: 'smooth, soft and glowing skin' },
    { name: 'straight & white teeth' },
    { name: 'perfect smile' },
    { name: 'big, full lips & ideal mouth' },
    { name: 'captivating face and a beautiful body' },
    { name: 'deep, soul-level beauty' }
]

function categoryList({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight iconName1={''} iconName2={''} iconName3={drawerIcon} onPress3={() => navigation.openDrawer()} />,
            headerTitle: () => <HeaderTitle title={'Subliminals'} />,
            headerLeft: () => <HeaderLeft text={''} iconName={backIcon} onPress={() => navigation.goBack()} />,
        });
    }, [navigation]);

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={SpaceStyles.top5}>
                <TouchableOpacity style={CommonStyles.musicCategory}>
                    <Image
                        source={grayStarIcon}
                        resizeMode='cover'
                    />
                    <CustomText
                        text={'BEAUTY'}
                        style={[TextStyles.quicksandRegular24Black, SpaceStyles.left5]}
                    />
                </TouchableOpacity>

                <CustomText
                    text={'Subliminal to amplify beauty'}
                    style={[TextStyles.textBold24Black, SpaceStyles.textAlign, SpaceStyles.vertical2]}
                />
                {data.map((i) => {
                    return (
                        <TouchableOpacity style={CommonStyles.musicCategory} >
                            <Image
                                source={blackRoundIcon}
                                resizeMode='contain'
                            />
                            <CustomText
                                text={i.name}
                                style={[TextStyles.quicksandRegular16Black, SpaceStyles.left5, SpaceStyles.bottom1]}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
            <TouchableOpacity onPress={() => NavigationService.navigate('MusicScreen')}>
                <CustomText
                    text={'Listen Now'}
                    style={[TextStyles.textBold36Black, SpaceStyles.textAlign, SpaceStyles.top2, { textDecorationLine: 'underline' }]}
                />
            </TouchableOpacity>
            <SafeAreaView />
        </View>
    )
}

export default categoryList