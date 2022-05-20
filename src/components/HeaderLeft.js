import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import CommonStyles from '../style/CommonStyles'
import SpaceStyles from '../style/SpaceStyles'
import TextStyles from '../style/TextStyles'
import CustomText from './CustomText'

function HeaderLeft({ text, iconName, onPress }) {
    return (
        <View style={[SpaceStyles.spaceHorizonatl, SpaceStyles.rowFlex]}>
            {iconName &&
                <TouchableOpacity
                    style={CommonStyles.headerLeftView}
                    onPress={onPress}>
                    <Image
                        source={iconName}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            }
            <CustomText
                text={text}
                style={{ textAlign: 'center' }}
            />
        </View>
    )
}

export default HeaderLeft
