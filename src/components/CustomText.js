import React from "react";
import { StyleSheet, Text } from "react-native";
import { BLACK } from "../constants/Colors";

const CustomText = (props) => {
  const { numberOfLines, text, style } = props;
  return (
    <Text numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: BLACK,
    fontSize: 14
  },
});

export default CustomText;
