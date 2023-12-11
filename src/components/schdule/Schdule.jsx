import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/Color';
import Slocation from '../../assets/svg/Slocation.svg';
import Scalender from '../../assets/svg/Scalendar.svg';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import FONT_FAMILY from '../../consts/Fonts';
export default function Schedule() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.maintext}>My Schedule</Text>
        <Text style={styles.mainsee}>See all</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.maindest}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{height: 84, width: 84, marginLeft: 12}}>
              <Image
                source={require('../../assets/img/desti.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={styles.newData}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.dollersText}>Asteria hotel </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dollers}> $165,3 </Text>
                  <Text style={styles.dollers1}>/night</Text>
                </View>
              </View>
              <View style={styles.look}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={styles.look}>
                <Scalender />
                <Text style={styles.location}>27 October 2022</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maindest}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{height: 84, width: 84, marginLeft: 12}}>
              <Image
                source={require('../../assets/img/hotel2.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={styles.newData}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.dollersText}>Golden Pelece </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dollers}> $175,3 </Text>
                  <Text style={styles.dollers1}>/night</Text>
                </View>
              </View>
              <View style={styles.look}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={styles.look}>
                <Scalender />
                <Text style={styles.location}>27 October 2022</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  price: {
    color: COLORS.$color,
  },
  Text: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  location: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
  dollersText: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
    gap: 10,
  },
  dollers: {
    color: COLORS.$color,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  dollers1: {
    fontSize: fontPixel(14),
    color: COLORS.grey,
    alignSelf: 'center',
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
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    marginHorizontal: pixelSizeHorizontal(24),
    marginVertical: pixelSizeVertical(16),
    minHeight: 108,
  },
  mainImg: {
    width: '100%',
    height: 84,
    borderRadius: 4,
    resizeMode: 'contain',
    marginVertical: 12,
  },
  newData: {
    flex: 2,
    marginVertical: 17,
    marginLeft: pixelSizeHorizontal(16),
    marginRight: pixelSizeHorizontal(12),
  },
  look: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: pixelSizeVertical(8),
  },
});
