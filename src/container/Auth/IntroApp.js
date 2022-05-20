import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomText from "../../components/CustomText";
import { BLACK, INACTIVEDOT, TEXTGRAY } from "../../constants/Colors";
import { introIcon, setp1, step2, step3, step4 } from "../../constants/Images";
import NavigationService from "../../navigation/NavigationService";
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";
import Swiper from 'react-native-swiper'

let data = [
    {
        title: 'How To Start Using Subliminals',
        content: '5 STEPS',
        image: introIcon
    },
    {
        title: 'Step 1: Explore our library.',
        content: `Browse our library of over 100+ subliminal affirmations meditation tracks. ${'\n'} ${'\n'} We currently have subliminals for all areas of life including: love & relationships, money, business, talent and appearance.`,
        image: setp1
    },
    {
        title: 'Step 2: Choose a background sound.',
        content: `For every single one of our subliminals, we offer 3-5 different background sounds. ${'\n'} ${'\n'} The tracks contain identical subliminal affirmations and binaural beat frequencies, so you can choose whichever background sound you prefer! ${'\n'} ${'\n'} Also, the affirmations weve created for each subliminal are listed out below the tracks so you will always know what affirmations are included in the track, even though you wont be able to consciously hear them.`,
        image: step2
    },
    {
        title: 'Step 3: Listen consistently.',
        content: `Research shows that it takes 21 days to form a new habit. The same is true for your brain! ${'\n'} ${'\n'} Be sure to listen to subliminals consistently for best results.`,
        image: step3
    },
    {
        title: 'Step 4: Watch for evidence of shifts + changes.',
        content: `Once youve started listening, keep your eyes open for any changes or shifts you may experience! Often, the early evidence of manifestation is small but still very significant. ${'\n'} ${'\n'} Remember to keep an open mind, have faith in the thing youre shifting in your life and get excited about the small changes as you begin to notice them.`,
        image: step4
    },
];

function IntroApp({ navigation }) {

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={[SpaceStyles.height90, SpaceStyles.top5, SpaceStyles.padding5]}>
                <Swiper
                    dotColor={INACTIVEDOT}
                    activeDotColor={BLACK}
                    dotStyle={{ height: 12, width: 12, borderRadius: 90 }}
                    activeDotStyle={{ height: 12, width: 12, borderRadius: 90 }}
                    removeClippedSubviews={false}
                >
                    {data?.map((item, index) => {
                        return (
                            <View style={[SpaceStyles.height90, SpaceStyles.alignSpaceVerticalBlock]} key={index}>
                                <CustomText
                                    text={item.title}
                                    style={[index == 0 ? TextStyles.textBold36Black : TextStyles.textBold24Black, { textAlign: 'center' }]}
                                />
                                <View style={[SpaceStyles.padding5, SpaceStyles.top5]}>
                                    <CustomText
                                        text={item.content}
                                        style={[index == 0 ? TextStyles.textBold24Gray : TextStyles.textSegoe18DarkGray, { textAlign: 'center' }]}
                                    />
                                </View>
                                <View style={AuthStyles.centerImageView} key={index}>
                                    <Image
                                        source={item.image}
                                        resizeMode='cover'
                                        style={{ marginBottom: 30 }}
                                    // style={(index == 1 || index == 2) ? AuthStyle.sliderImageBig : AuthStyle.sliderImage}
                                    />
                                </View>
                                {/* <View style={AuthStyles.centerImageView} key={index}>
                                        <Image
                                            source={item.image}
                                            resizeMode='cover'
                                            // style={(index == 1 || index == 2) ? AuthStyle.sliderImageBig : AuthStyle.sliderImage}
                                        />
                                    </View> */}
                                {/* {index == 0 &&
                                        <Text style={[TextStyles.textMedium20LightBlack, { textAlign: 'center' }]}>{item.title}</Text>
                                    }
                                    {index == 1 &&
                                        <Text style={[TextStyles.textMedium20LightBlack, { textAlign: 'center' }]}>{item.title}</Text>
                                    }
                                    {index == 2 &&
                                        <Text style={[TextStyles.textMedium20LightBlack, { textAlign: 'center' }]}>{item.title}</Text>
                                    }
                                    {index == 3 &&
                                        <Text style={[TextStyles.textMedium20LightBlack, { textAlign: 'center', marginTop: isIos ? HEIGHT * -12 : HEIGHT * -10 }]}>{item.title}</Text>
                                    } */}
                            </View>
                        )
                    })}

                </Swiper>
                <TouchableOpacity style={[SpaceStyles.padding5]} onPress={() => NavigationService.navigate('Route')}>
                    <CustomText
                        text={'Next'}
                        style={[TextStyles.textSegoe18DarkGray, { textAlign: 'center' }]}
                    />
                </TouchableOpacity>
            </View>
            <SafeAreaView />
        </View>
    )
}

export default IntroApp