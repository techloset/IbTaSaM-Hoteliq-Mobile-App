import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import COLORS from '../../consts/Color';
import Star from '../../assets/svg/star.svg';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';
import FONT_FAMILY from '../../consts/Fonts';

const {height} = Dimensions.get('window');
export default function Destination() {
  return (
    <>
      <View>
        <View style={styles.main}>
          <Text style={styles.maintext}>Popular Destination</Text>
          <Text style={styles.mainsee}>See all</Text>
        </View>

        <View style={styles.maindest}>
          <View
            style={styles.maindest1}>
            <View style={{height: heightPixel(84), width: widthPixel(84)}}>
              <Image
                source={require('../../assets/img/desti.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={{flex: 2, paddingLeft: 16, gap: 8}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.dollersText}>Asteria hotel </Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 0}}>
                  <Text style={styles.dollers}> $165,3 </Text>
                  <Text style={{fontSize: fontPixel(14), color: COLORS.grey}}>
                    /night
                  </Text>
                </View>
              </View>
              <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <Star width={widthPixel(20)} height={heightPixel(20)} />
                <Star width={widthPixel(20)} height={heightPixel(20)} />
                <Star width={widthPixel(20)} height={heightPixel(20)} />
                <Star width={widthPixel(20)} height={heightPixel(20)} />
                <Star width={widthPixel(20)} height={heightPixel(20)} />

                <Text style={styles.number}>5.0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  price: {
    color: COLORS.$color,
  },
  Text: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontWeight: '700',
  },
  location: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    marginTop: 0,
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
  dollersText: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    lineHeight: fontPixel(21),
    paddingRight: 15,
  },
  dollers: {
    color: COLORS.$color,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  number: {
    color: COLORS.black,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    alignSelf: 'baseline',
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    width: widthPixel(21),
    height: heightPixel(18),
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(24),
  },
  maintext: {
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    color: COLORS.black,
    fontSize: fontPixel(16),
  },
  mainsee: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
  maindest: {
    backgroundColor: 'white',
    marginVertical: pixelSizeVertical(16),
    marginHorizontal: pixelSizeHorizontal(24),
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    height: heightPixel(108),
  },
  maindest1: {
    flex: 0,
    padding: pixelSizeHorizontal(12),
    paddingBottom: height >= 670 ? pixelSizeVertical(0) : pixelSizeVertical(12),
    flexDirection: 'row',
  },
  mainImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    resizeMode: 'contain',
  },
});
