import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import House from '../../assets/svg/house.svg';
import HouseWhite from '../../assets/svg/houseWhite.svg';
import Shop from '../../assets/svg/shop.svg';
import ShopWhite from '../../assets/svg/shopWhite.svg';
import Coffee from '../../assets/svg/coffee.svg';
import CoffeeWhite from '../../assets/svg/coffeeWhite.svg';

import COLORS from '../../consts/Color';

import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle';

export const SearchButton = () => {
  const [color, setColor] = useState(true);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const setColorHandler = () => {
    setColor(true);
    setColor1(false);
    setColor2(false);
  };
  const setColor1Handler = () => {
    setColor(false);
    setColor1(true);
    setColor2(false);
  };
  const setColor2Handler = () => {
    setColor(false);
    setColor1(false);
    setColor2(true);
  };
  return (
    <>
      <View style={styles.mainStyle}>
        <TouchableOpacity
          style={color ? styles.PressableColor : styles.PressableBtn}
          onPress={setColorHandler}>
          {color ? (
            <HouseWhite width={widthPixel(20)} height={heightPixel(20)} />
          ) : (
            <House width={widthPixel(20)} height={heightPixel(20)} />
          )}
          <Text style={color ? styles.titlePress : styles.title}>Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={color1 ? styles.PressableColor : styles.PressableBtn}
          onPress={setColor1Handler}>
          {color1 ? (
            <ShopWhite width={widthPixel(20)} height={heightPixel(20)} />
          ) : (
            <Shop width={widthPixel(20)} height={heightPixel(20)} />
          )}
          <Text style={color1 ? styles.titlePress : styles.title}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={color2 ? styles.PressableColor : styles.PressableBtn}
          onPress={setColor2Handler}>
          {color2 ? (
            <CoffeeWhite width={widthPixel(20)} height={heightPixel(20)} />
          ) : (
            <Coffee width={widthPixel(20)} height={heightPixel(20)} />
          )}
          <Text style={color2 ? styles.titlePress : styles.title}>Coffee</Text>
        </TouchableOpacity>
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
  title: {fontSize: fontPixel(14), color: COLORS.grey},
  titlePress: {color: COLORS.white},
  PressableColor: {
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
