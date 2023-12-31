import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Wifi from '../../assets/svg/wifi.svg';
import Coffee1 from '../../assets/svg/coffee1.svg';
import Star from '../../assets/svg/star.svg';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/Color';
import FONT_FAMILY from '../../consts/Fonts';

const DetailsButton = () => {
  return (
    <>
      <View style={{flexDirection: 'row', gap: 8}}>
        <TouchableOpacity style={styles.btn}>
          <Wifi width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={styles.text}>Free Wifi </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Coffee1 width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={styles.text}>Free Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Star width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={styles.text}>5.0 </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailsButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.bt,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(9),
  },
  text: {
    paddingLeft: pixelSizeHorizontal(8),
    color: COLORS.black,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
});
