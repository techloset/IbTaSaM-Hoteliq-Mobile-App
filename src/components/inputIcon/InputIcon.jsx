import {TextInput, StyleSheet, View} from 'react-native';
import Search from '../../img/homeImg/search-normal.svg';
import COLORS from '../../consts/Color';
import SlideIcon from '../../img/homeImg/Icon.svg';
import {SearchButton} from '../searchButton/SearchButton';

import {
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle';

export const InputIcon = ({showItems, setShowItems, handleSlideIconPress}) => {
  return (
    <>
      {!showItems ? (
        <View style={styles.inputContainer}>
          <Search />
          <TextInput
            style={[styles.input]}
            placeholder="Search Hotel"
            placeholderTextColor="#878787"
          />
          <SlideIcon onPress={handleSlideIconPress} />
        </View>
      ) : (
        <View>
          <SearchButton setShowItems={setShowItems} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.borderGrey,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: pixelSizeHorizontal(12),
  },
  input: {
    fontFamily: 'PlusJakartaSans-Medium',
    flex: 1,
    fontSize: fontPixel(14),
    height: heightPixel(52),
    paddingLeft: pixelSizeVertical(12),
  },
});
