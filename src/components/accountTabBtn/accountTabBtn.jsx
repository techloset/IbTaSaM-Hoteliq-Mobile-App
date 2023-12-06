import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Bookmark2 from '../../assets/svg/bookmark2.svg';
import COLORS from '../../consts/Color';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';

const AccountBtn = () => {
  return (
    <View style={styles.Btn}>
      <Bookmark2 />
      <Text
        style={{
          color: COLORS.lightBlue,
          paddingTop: pixelSizeVertical(3),
          fontSize: fontPixel(12),
          fontWeight: 600,
        }}>
        Account
      </Text>
    </View>
  );
};

export default AccountBtn;

const styles = StyleSheet.create({
  Btn: {
    flexDirection: 'row',
    backgroundColor: COLORS.homeBtnColor,
    paddingVertical: pixelSizeVertical(6),
    paddingHorizontal: pixelSizeHorizontal(9),
    borderRadius: 20,
    gap: 8,
  },
});
