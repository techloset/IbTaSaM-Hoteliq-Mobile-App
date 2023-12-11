import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import House from '../../assets/svg/house.svg';
import Shop from '../../assets/svg/shop.svg';
import Coffee from '../../assets/svg/coffee.svg';

import COLORS from '../../consts/Color';

import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle';

export const SearchButton = () => {
  return (
    <>
      <View style={styles.mainStyle}>
        <Pressable style={styles.PressableHouse}>
          <House width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={{color: COLORS.white, fontSize: fontPixel(14)}}>
            Hotel
          </Text>
        </Pressable>
        <Pressable style={styles.PressableBtn}>
          <Shop width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={{fontSize: fontPixel(14), color: COLORS.grey}}>
            Market
          </Text>
        </Pressable>
        <Pressable style={styles.PressableBtn}>
          <Coffee width={widthPixel(20)} height={heightPixel(20)} />
          <Pressable>
            <Text style={{fontSize: fontPixel(14), color: COLORS.grey}}>
              Coffee
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  PressableHouse: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: pixelSizeHorizontal(17),
    paddingVertical: pixelSizeVertical(8),
  },
  PressableBtn: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: pixelSizeHorizontal(17),
    paddingVertical: pixelSizeVertical(8),
  },
});
