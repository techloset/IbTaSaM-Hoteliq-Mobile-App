import {Text, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import COLORS from '../../consts/Color';
import {fontPixel} from '../../utils/ResponsiveStyle';
import SCREENS from '../../library/SCREENS';

const SplashScreen = () => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const navigation = useNavigation();

  useEffect(() => {
    // Fade out the splash screen after a delay
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as per your requirement
      useNativeDriver: true,
    }).start(() => {
      // After the animation completes, navigate to the Welcome screen
      navigation.reset({
        index: 0,
        routes: [{name: SCREENS.BOTTOM_NAVIGATOR}],
      });
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Text style={styles.main_title}>HOTEL IQ</Text>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.$color,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_title: {
    fontSize: fontPixel(50),
    color: COLORS.white,
  },
});
