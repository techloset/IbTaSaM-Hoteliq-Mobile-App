import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home2 from '../../assets/svg/home-2.svg';
import COLORS from '../../consts/Color';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';

const ScheduleBtn = () => {
  return (
    <View style={styles.Btn}>
      <Home2 />
      <Text
        style={{
          color: COLORS.lightBlue,
          paddingTop: pixelSizeVertical(3),
          fontSize: fontPixel(12),
          fontWeight: 600,
        }}>
        Schedule
      </Text>
    </View>
  );
};

export default ScheduleBtn;

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
