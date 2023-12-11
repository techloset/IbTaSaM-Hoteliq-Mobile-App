import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import Location from '../../assets/svg/location.svg';
import ArrowDown from '../../assets/svg/arrow-down.svg';
import Noti from '../../assets/svg/noti.svg';

import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  heightPixel,
  widthPixel,
} from '../../utils/ResponsiveStyle';

import COLORS from '../../consts/Color';
import {useState} from 'react';
import {InputIcon} from '../../components/inputIcon/InputIcon';
import hotels from '../../consts/Hotel';
import {HotelCard} from '../../components/hotelCard/HotelCard';
import Destination from '../../components/popularDestination/Destination';
import FONT_FAMILY from '../../consts/Fonts';

export default HomeScreen = () => {
  const [showItems, setShowItems] = useState(false);
  const handleSlideIconPress = () => {
    setShowItems(!showItems);
  };

  const [showView, setShowView] = useState(false);

  const handleShowView = () => {
    setShowView(!showView);
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 0}}>
          <View style={styles.header}>
            <View style={styles.headLocation}>
              <Text style={styles.cuurentLocation}>Current location</Text>
              <View style={styles.Location1}>
                <Location style={{marginTop: 5}} />
                <Text style={styles.innerText}>Wallace, Australia</Text>
                <ArrowDown style={{marginTop: 5}} onPress={handleShowView} />
              </View>
            </View>
            <View style={styles.notiStyle}>
              <Noti />
            </View>
          </View>
          {showView ? (
            <View style={styles.dropDown}>
              <View style={styles.Location1}>
                <Location />
                <Text style={{marginLeft: 5}}>Nuziland, Bibuli</Text>
              </View>
              <View style={styles.Location1}>
                <Location />
                <Text style={{marginLeft: 5}}>Jojin, titan</Text>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <View
            style={{
              marginHorizontal: pixelSizeHorizontal(20),
              paddingVertical: showItems ? 32 : 24,
            }}>
            <InputIcon
              showItems={showItems}
              setShowItems={setShowItems}
              handleSlideIconPress={handleSlideIconPress}
            />
          </View>
        </View>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={{}}>
              <View style={styles.Nearby}>
                <Text style={styles.NearbyLocation}>Nearby your location</Text>
                <Text style={styles.see}>See all</Text>
              </View>
              <FlatList
                horizontal
                data={hotels}
                contentContainerStyle={{
                  paddingTop: pixelSizeVertical(16),
                  paddingBottom: pixelSizeVertical(24),
                  paddingLeft: pixelSizeHorizontal(20),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <HotelCard
                    hotel={item}
                    index={index}
                    showItems={showItems}
                    setShowItems={setShowItems}
                    handleSlideIconPress={handleSlideIconPress}
                  />
                )}
              />
            </View>
            <View style={{flex: 0, justifyContent: 'flex-start'}}>
              <Destination />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  notiStyle: {
    borderColor: COLORS.borderGrey,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: pixelSizeVertical(8),
    paddingHorizontal: pixelSizeHorizontal(8),
  },
  header: {
    marginTop: pixelSizeVertical(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  Location1: {
    flex: 0,
    flexDirection: 'row',
    paddingTop: pixelSizeVertical(4),
    alignItems: 'center',
  },
  cuurentLocation: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
  dropDown: {
    marginHorizontal: pixelSizeHorizontal(80),
    paddingVertical: pixelSizeVertical(5),
    position: 'absolute',
    top: heightPixel(110),
    width: widthPixel(200),
    backgroundColor: COLORS.white,
    zIndex: 2,
    gap: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    borderColor: COLORS.borderGrey,
    borderRadius: 8,
    borderWidth: 2,
  },
  innerText: {
    color: COLORS.black,
    paddingLeft: pixelSizeHorizontal(10),
    paddingRight: pixelSizeHorizontal(5),
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  container1: {
    paddingHorizontal: pixelSizeHorizontal(24),
    paddingTop: 32,
    paddingBottom: 24,
  },
  Nearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(24),
  },
  NearbyLocation: {
    color: COLORS.black,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.plusJakartaSansBold,
  },
  see: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
  },
});
