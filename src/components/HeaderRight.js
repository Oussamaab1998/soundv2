import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import constants from '../constants'

function HeaderRight({ iconName1, iconName2, iconName3, onPress = () => { }, onPress3 = () => { } }) {
    return (
        <View style={{
            borderRadius: 90,
            width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 9,
            height: (constants.BaseStyle.DEVICE_WIDTH / 100) * 9,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: (constants.BaseStyle.DEVICE_WIDTH / 100) * 3,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: (constants.BaseStyle.DEVICE_WIDTH / 100) * 10,
        }}>
            <Image
                source={iconName1}
                resizeMode='contain'
                style={{ margin: 5 }}
            />
            <Image
                source={iconName2}
                resizeMode='contain'
                style={{ margin: 5 }}
            />
            <TouchableOpacity onPress={onPress3}>
                <Image
                    source={iconName3}
                    resizeMode='contain'
                    style={{ margin: 5 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRight