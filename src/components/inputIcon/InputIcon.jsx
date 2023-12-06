import {TextInput, StyleSheet, View} from 'react-native';
import Search from '../../assets/svg/search-normal.svg';
import COLORS from '../../consts/Color';
import SlideIcon from '../../assets/svg/Icon.svg';
import {SearchButton} from '../searchButton/SearchButton';

import {
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle';
import FONT_FAMILY from '../../consts/Fonts';

export const InputIcon = ({showItems, handleSlideIconPress}) => {
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
          <SearchButton />
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
    fontFamily: FONT_FAMILY.plusJakartaSansMedium,
    flex: 1,
    fontSize: fontPixel(14),
    height: heightPixel(52),
    paddingLeft: pixelSizeVertical(12),
  },
});
