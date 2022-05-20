import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { useTheme, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import NavigationService from '../navigation/NavigationService';
import CommonStyles from '../style/CommonStyles';
import { audioIcon, contactIcon, disclaimerIcon, fAQsIcon, homeIcon, howsItWorkIcon, instructions, secureIcon, shutdownIcon, subliminalsIcon, termsIcon, testimonialsIcon, userIcon, userWhiteIcon } from '../constants/Images';
import CustomText from '../components/CustomText';
import TextStyles from '../style/TextStyles';
import SpaceStyles from '../style/SpaceStyles';

export default function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={CommonStyles.drawerUserIconSection}>
                        <Image
                            source={userWhiteIcon}
                        />
                    </View>
                    <CustomText
                        text={'John Carter'}
                        style={[TextStyles.textQuicksand14Black, SpaceStyles.textAlign]}
                    />
                    <View style={CommonStyles.borderView} />

                    <View style={[SpaceStyles.padding5, SpaceStyles.top2]}>
                        <TouchableOpacity style={SpaceStyles.rowFlex} onPress={() => NavigationService.navigate('HomeScreen')}>
                            <Image source={homeIcon} />
                            <CustomText
                                text={'Home'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[SpaceStyles.rowFlex, SpaceStyles.top2]} onPress={() => NavigationService.navigate('SubliminalsScreen')}>
                            <Image source={subliminalsIcon} />
                            <CustomText
                                text={'Subliminals'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </TouchableOpacity>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={instructions} />
                            <CustomText
                                text={'Instructions'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={testimonialsIcon} />
                            <CustomText
                                text={'Testimonials'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={howsItWorkIcon} />
                            <CustomText
                                text={'How it works'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={audioIcon} />
                            <CustomText
                                text={'Listening Tips'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={fAQsIcon} />
                            <CustomText
                                text={'FAQs'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={contactIcon} />
                            <CustomText
                                text={'Contact'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={disclaimerIcon} />
                            <CustomText
                                text={'Disclaimer'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={secureIcon} />
                            <CustomText
                                text={'Privacy Policy'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top2]}>
                            <Image source={termsIcon} />
                            <CustomText
                                text={'Terms of Service'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                        <CustomText
                            text={'Intellectual Property Notice'}
                            style={[TextStyles.textQuicksand14LightGray, SpaceStyles.top5, { textAlign: 'center' }]}
                        />
                        <View style={[SpaceStyles.rowFlex, SpaceStyles.top5]}>
                            <Image source={shutdownIcon} />
                            <CustomText
                                text={'Logout'}
                                style={[TextStyles.textQuicksandMedium18Black, SpaceStyles.left5]}
                            />
                        </View>
                    </View>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple
                            onPress={() => {
                                toggleTheme();
                            }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                //   onPress={() => {
                //     signOut();
                //   }}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        color: "white",
    },
    caption: {
        fontSize: 14,
        color: "white"

    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        // borderTopColor: '#f4f4f4',
        // borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    linearGradient: {
        margin: 0, marginTop: -19,
        paddingVertical: 20
    },
    _close_row: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        paddingHorizontal: 20
    }
});