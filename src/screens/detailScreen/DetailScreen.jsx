import React, {useState} from 'react';

import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../../consts/Color';

import Back from '../../assets/svg/Iconlying.svg';
import Menu from '../../assets/svg/more.svg';
import Location from '../../assets/svg/location.svg';
import Heart from '../../assets/svg/favorite.svg';
import bgImg from '../../assets/img/hotel1.png';

import DetailsButton from '../../components/detailsButton/DetailsButton';

import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';
import FONT_FAMILY from '../../consts/Fonts';
import SCREENS from '../../library/SCREENS';

export default function DetailScreen({navigation}) {
  const [text, setText] = useState(
    'Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea. perfect for a romantic, charming ',
  );

  const onPressTitle = () => {
    setText(
      'Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea. perfect for a romantic, charming Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. ',
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View
          style={{
            borderColor: COLORS.borderGrey,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: pixelSizeVertical(8),
            paddingHorizontal: pixelSizeHorizontal(8),
          }}>
          <Back
            onPress={navigation.goBack}
            width={widthPixel(24)}
            height={heightPixel(24)}
          />
        </View>
        <Text style={styles.Toptext}>Detail</Text>
        <TouchableOpacity
          style={{
            borderColor: COLORS.borderGrey,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: pixelSizeVertical(8),
            paddingHorizontal: pixelSizeHorizontal(8),
          }}>
          <Menu width={widthPixel(24)} height={heightPixel(24)} />
        </TouchableOpacity>
      </View>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flex: 0.48,
          marginHorizontal: pixelSizeHorizontal(24),
        }}>
        <View>
          <Heart
            style={{position: 'absolute', right: 13, top: '12%', zIndex: 10}}
          />

          <ImageBackground
            style={styles.headerImage}
            source={bgImg}></ImageBackground>
          <DetailsButton />
        </View>
      </View>
      <View style={styles.mainstyle1}>
        <View style={styles.detailsText}>
          <Text style={styles.d1}>The Aston Vill Hotel</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.d4}>
              $200,7
              <Text style={{color: COLORS.grey, fontSize: fontPixel(14)}}>
                /night
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.d2}>
          <Location width={widthPixel(18)} height={heightPixel(18)} />
          <Text style={styles.d3}>Alice Springs NT 0870, Australia</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.d6}>Description</Text>
          <Text style={styles.d7} onPress={onPressTitle}>
            {text}
            <Text style={styles.readStyle}>Read More. . .</Text>
          </Text>
        </View>
      </View>
      <View style={styles.mainstyle2}>
        <View style={styles.d8}>
          <Text style={styles.preview}>Preview</Text>
          <View style={styles.previewImg}>
            <Image
              source={require('../../assets/img/preview1.png')}
              style={styles.imgStyle}
            />

            <Image
              source={require('../../assets/img/preview2.png')}
              style={styles.imgStyle}
            />
            <Image
              source={require('../../assets/img/preview3.png')}
              style={styles.imgStyle}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(SCREENS.SCHDULE)}>
            <Text style={styles.BtnColor}>Booking Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainstyle1: {
    marginHorizontal: pixelSizeHorizontal(24),
    flex: 0.23,
    marginTop: pixelSizeVertical(16),
  },
  mainstyle2: {
    flex: 0.29,
    marginHorizontal: pixelSizeHorizontal(24),
    marginTop: pixelSizeVertical(16),
  },
  imgStyle: {
    width: widthPixel(98),
    height: heightPixel(82),
    borderRadius: 5,
  },
  readStyle: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    marginLeft: fontPixel(12),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(100),
    backgroundColor: COLORS.lightBlue,
    borderRadius: 12,
    height: 53,
  },
  priceTag: {
    height: heightPixel(40),
    alignItems: 'center',
    marginLeft: pixelSizeVertical(40),
    paddingLeft: pixelSizeVertical(20),
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  headerImage: {
    marginTop: pixelSizeVertical(28),
    marginBottom: pixelSizeVertical(16),
    height: heightPixel(250),
    overflow: 'hidden',
    borderRadius: 8,
    width: widthPixel(327),
  },
  header: {
    marginTop: pixelSizeVertical(40),
    marginHorizontal: pixelSizeHorizontal(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Toptext: {
    color: COLORS.black,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  detailsText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  d1: {
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    color: COLORS.black,
  },
  d2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(8),
  },
  d3: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansRegular,
  },
  d4: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    color: COLORS.lightBlue,
  },
  text: {marginTop: pixelSizeVertical(16)},
  d6: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  d7: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansRegular,
    color: COLORS.grey,
    paddingTop: pixelSizeVertical(12),
    lineHeight: fontPixel(18),
    textAlign: 'justify',
  },
  preview: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    color: COLORS.black,
  },
  previewImg: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(8),
  },
  BtnColor: {
    color: COLORS.white,
    fontSize: fontPixel(18),
    lineHeight: fontPixel(18),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
});
