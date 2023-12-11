import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../../consts/Color';

import Back from '../../assets/svg/Iconlying.svg';
import Setting from '../../assets/svg/setting-2.svg';
import RightVector from '../../assets/svg/Vector.svg';
import LeftVector from '../../assets/svg/Vector1.svg';

import {Calendar} from 'react-native-calendars';
import {useState} from 'react';

import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveStyle';

import Schedule from '../../components/schdule/Schdule';
import FONT_FAMILY from '../../consts/Fonts';

const SchduleScreen = ({navigation}) => {
  const renderCustomArrow = (direction, onPress) => {
    const imageSource = direction === 'left' ? <LeftVector /> : <RightVector />;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} style={{width: 20, height: 20}} />
      </TouchableOpacity>
    );
  };

  const [selected, setSelected] = useState('2023-04-19');

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <View style={styles.setting}>
          <Back
            onPress={navigation.goBack}
            width={widthPixel(24)}
            height={heightPixel(24)}
          />
        </View>
        <Text style={styles.Toptext}>Schedule</Text>
        <TouchableOpacity style={styles.setting}>
          <Setting width={widthPixel(24)} height={heightPixel(24)} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

        <View
          style={{
            marginHorizontal: pixelSizeHorizontal(24),
            marginTop: pixelSizeVertical(44),
          }}>
          <Calendar
            theme={{
              backgroundColor: COLORS.lightGray,
              calendarBackground: COLORS.lightGray,
              textSectionTitleColor: COLORS.black,
              textSectionTitleDisabledColor: COLORS.lightDarkGray,
              selectedDayTextColor: COLORS.white,
              todayTextColor: COLORS.blue,
              dayTextColor: COLORS.black,
              textDisabledColor: COLORS.lightDarkGray,
              dotColor: COLORS.dotColor,
              selectedDotColor: COLORS.red,
              arrowColor: COLORS.$color,
              disabledArrowColor: COLORS.lightDarkGray,
              monthTextColor: COLORS.black,
              indicatorColor: COLORS.blue,
              textDayFontFamily: FONT_FAMILY.plusJakartaSansRegular,
              textMonthFontFamily: FONT_FAMILY.plusJakartaSansRegular,
              textDayHeaderFontFamily: FONT_FAMILY.plusJakartaSansRegular,
              textDayFontWeight: '500',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textDayFontSize: fontPixel(12),
              textMonthFontSize: fontPixel(14),
              textDayHeaderFontSize: fontPixel(12),
              renderArrow: renderCustomArrow,
            }}
            style={{borderRadius: 8}}
            markingType="custom"
            markedDates={{
              [selected]: {
                selected: true,
                selectedColor: 'red',
                customStyles: {
                  container: {
                    backgroundColor: COLORS.lightBlue,
                    justifyContent: 'center',
                  },
                },
              },
            }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
          />
        </View>
        <Schedule />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: pixelSizeVertical(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: pixelSizeHorizontal(24),
    justifyContent: 'space-between',
  },
  setting: {
    borderColor: COLORS.borderGrey,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: pixelSizeVertical(8),
    paddingHorizontal: pixelSizeHorizontal(8),
  },
  Toptext: {
    color: COLORS.black,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
});

export default SchduleScreen;
