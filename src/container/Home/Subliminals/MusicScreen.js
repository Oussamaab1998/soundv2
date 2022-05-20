import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, SafeAreaView, Text } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../../../components/CustomText";
import HeaderLeft from "../../../components/HeaderLeft";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import { backIcon, bagIcon, drawerIcon, musicIcon, splashLog, grayStarIcon, blackRoundIcon, amplifyIcon, playIcon, skiptoStart, endIcon, addIcon } from "../../../constants/Images";
import NavigationService from "../../../navigation/NavigationService";
import AuthStyles from "../../../style/AuthStyles";
import CommonStyles from "../../../style/CommonStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import { BLACK } from "../../../constants/Colors";

const data = [
    { name: 'I radiate inner and outer beauty.' },
    { name: 'I am stunningly gorgeous from head to toe.' },
    { name: 'I look and feel incredibly beautiful.' },
    { name: 'I have a gorgeous face and a stunning smile' },
    { name: 'I radiate supernatural beauty from the inside out' },
    { name: 'I have soft, smooth and glowing skin.' },
    { name: 'I attract love and positive attention everywhere I go.' }
]

function MusicScreen({ navigation }) {

    let sound1, sound2, sound3, sound4, sound5, sound6;

    useEffect(() => {
        Sound.setCategory('Playback', true); // true = mixWithOthers
        return () => {
            if (sound1) sound1.release();
            if (sound2) sound2.release();
            if (sound3) sound3.release();
            if (sound4) sound4.release();
            if (sound5) sound5.release();
            if (sound6) sound6.release();
        };
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight iconName1={''} iconName2={''} iconName3={drawerIcon} onPress3={() => navigation.openDrawer()} />,
            headerTitle: () => <HeaderTitle title={'Subliminals'} />,
            headerLeft: () => <HeaderLeft text={''} iconName={backIcon} onPress={() => navigation.goBack()} />,
        });
    }, [navigation]);

    const playSound = () => {
        console.log("...........11");
        sound1 = new Sound('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3', '', (error, _sound) => {
            console.log(_sound, "_sound===");
            if (error) {
                alert('error' + error.message);
                return;
            }
            sound1.play(() => {
                sound1.release();
            });
        });
    }

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={[SpaceStyles.top5, { height: '80%' }]}>
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
                    text={'Amplify Beauty'}
                    style={[TextStyles.textBold24Black, SpaceStyles.textAlign, SpaceStyles.vertical2]}
                />
                {data.map((i, index) => {
                    return (
                        <TouchableOpacity style={CommonStyles.musicList} >
                            <CustomText
                                text={index + 1 + '.'}
                                style={[TextStyles.textQuicksand14Black]}
                            />
                            <CustomText
                                text={i.name}
                                style={[TextStyles.textQuicksand14Black, SpaceStyles.left5]}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>

            <View style={CommonStyles.musicView}>
                <View style={CommonStyles.musicBorderView} />

                <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top2, SpaceStyles.padding5]}>
                    <Image
                        source={amplifyIcon}
                        resizeMode='cover'
                    />
                    <View style={SpaceStyles.rowFlex}>
                        <Image
                            source={skiptoStart}
                            resizeMode='cover'
                            style={SpaceStyles.left5}
                        />
                        <TouchableOpacity onPress={() => playSound()}>
                            <Image
                                source={playIcon}
                                resizeMode='cover'
                                style={SpaceStyles.left5}
                            />
                        </TouchableOpacity>
                        <Image
                            source={endIcon}
                            resizeMode='cover'
                            style={SpaceStyles.left5}
                        />
                    </View>
                    <View style={SpaceStyles.rowFlex}>
                        <Image
                            source={addIcon}
                            resizeMode='cover'
                        />
                        <Image
                            source={musicIcon}
                            resizeMode='cover'
                            style={SpaceStyles.left5}
                        />
                    </View>
                </View>
                <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.padding5, SpaceStyles.top2]}>

                    <CustomText
                        text={'0.0'}
                        style={{}}
                    />
                    <Slider
                        style={CommonStyles.sliderStyle}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor={BLACK}
                        maximumTrackTintColor={BLACK}
                        thumbTintColor={BLACK}
                    />
                    <CustomText
                        text={'0.0'}
                        style={{}}
                    />

                </View>
            </View>

            <SafeAreaView />
        </View>
    )
}

export default MusicScreen