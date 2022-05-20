import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, SafeAreaView, Text } from 'react-native'
import CustomText from "../../components/CustomText";
import HeaderLeft from "../../components/HeaderLeft";
import HeaderRight from "../../components/HeaderRight";
import HeaderTitle from "../../components/HeaderTitle";
import { bagIcon, drawerIcon, musicIcon, userIcon, waveIcon } from "../../constants/Images";
import NavigationService from "../../navigation/NavigationService";
import AuthStyles from "../../style/AuthStyles";
import CommonStyles from "../../style/CommonStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";
import Swiper from 'react-native-swiper'
import { BLACK, INACTIVEDOT } from "../../constants/Colors";

let data = [
    {
        name: '-Sheryl A.',
        content: 'The 7 Chakra Money Clearing resulted in 2 new Real Estate clients contacting the next day.',
        name2: '-Nicole A.',
        content2: 'My sales have been picking up in my business since listening to the Attract Customers subliminal. I feel more motivated to do more with my business and the results are amazing. I definitely believe in the power of this and I love it!',
    },
    {
        name: '-Nicole A.',
        content: 'My sales have been picking up in my business since listening to the Attract Customers subliminal. I feel more motivated to do more with my business and the results are amazing. I definitely believe in the power of this and I love it!',
        name2: '-Sheryl A.',
        content2: 'The 7 Chakra Money Clearing resulted in 2 new Real Estate clients contacting the next day.',

    },
];

function Home({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight iconName1={musicIcon} iconName2={userIcon} iconName3={bagIcon} />,
            headerTitle: () => <HeaderTitle title={'Home'} />,
            headerLeft: () => <HeaderLeft text={''} iconName={drawerIcon} onPress={() => navigation.openDrawer()} />,
        });
    }, [navigation]);

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={CommonStyles.homeTopView}>
                <CustomText
                    text={'FIND YOUR FREQUENCY.'}
                    style={[TextStyles.textSegoe48White, SpaceStyles.textAlign, { fontWeight: '700' }]}
                />
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={waveIcon}
                        resizeMode='cover'
                        style={{ marginTop: 30 }}
                    />
                    <Image
                        source={waveIcon}
                        resizeMode='cover'
                        style={{ marginTop: 30 }}
                    />
                    <Image
                        source={waveIcon}
                        resizeMode='cover'
                        style={{ marginTop: 30 }}
                    />
                </View>
            </View>
            <View style={[SpaceStyles.height50, SpaceStyles.padding5]}>
                <Swiper
                    dotColor={INACTIVEDOT}
                    activeDotColor={BLACK}
                    dotStyle={{ height: 12, width: 12, borderRadius: 90 }}
                    activeDotStyle={{ height: 12, width: 12, borderRadius: 90 }}
                    removeClippedSubviews={false}
                >
                    {data?.map((item, index) => {
                        return (
                            <View key={index}>
                                <CustomText
                                    text={`“`}
                                    style={[TextStyles.textBoldQuicksand64Black, { textAlign: 'center' }]}
                                />
                                <CustomText
                                    text={item.content}
                                    style={[TextStyles.textQuicksand14LightGray, { textAlign: 'center' }]}
                                />
                                <CustomText
                                    text={item.name}
                                    style={[TextStyles.textQuicksand14Black, { textAlign: 'right' }]}
                                />
                                <CustomText
                                    text={`“`}
                                    style={[TextStyles.textBoldQuicksand64Black, { textAlign: 'center' }]}
                                />
                                <CustomText
                                    text={item.content2}
                                    style={[TextStyles.textQuicksand14LightGray, { textAlign: 'center' }]}
                                />
                                <CustomText
                                    text={item.name2}
                                    style={[TextStyles.textQuicksand14Black, { textAlign: 'right' }]}
                                />
                            </View>
                        )
                    })}
                </Swiper>
            </View>
            <SafeAreaView />
        </View>
    )
}

export default Home