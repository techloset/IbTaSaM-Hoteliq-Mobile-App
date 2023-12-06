import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from '../../assets/svg/profile2.svg';
import COLORS from '../../consts/Color';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';

const ProfileBtn = () => {
  return (
    <View style={styles.Btn}>
      <Profile />
      <Text
        style={{
          color: COLORS.lightBlue,
          paddingTop: pixelSizeVertical(3),
          fontSize: fontPixel(12),
          fontWeight: 600,
        }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileBtn;

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
