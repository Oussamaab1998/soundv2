import React from 'react'
import { View, TextInput } from 'react-native'
import { BLACK, TEXTGRAY } from '../constants/Colors'
import AuthStyles from '../style/AuthStyles'
import TextStyles from '../style/TextStyles'

const CustomTextInput = ({
    containerStyle,
    style,
    placeholder,
    onChangeText,
    keyboardType,
    maxLength,
    multiline,
    secureTextEntry,
    autoCapitalize,
    value,
    defaultValue,
    placeholderTextColor,
    editable,
    numberOfLines,
    textAlignVertical
}) => {
    return (
        <View style={[AuthStyles.textInputView, containerStyle]}>
            <TextInput
                style={[TextStyles.textSegoe18Black, style]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : TEXTGRAY}
                keyboardType={keyboardType}
                maxLength={maxLength}
                autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                multiline={multiline}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                value={value}
                defaultValue={defaultValue}
                editable={editable}
                numberOfLines={numberOfLines ? numberOfLines : 1}
                textAlignVertical={textAlignVertical ? textAlignVertical : 'center'}
            />
        </View>
    )
}
export default CustomTextInput
