import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../utils/ResponsiveStyle';

import BOTTOM_NAVIGATION from '../library/BOTTOM_NAVIGATION';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: heightPixel(72),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: pixelSizeHorizontal(24),
          paddingVertical: pixelSizeVertical(16),
        },
      }}>
      {BOTTOM_NAVIGATION.map((item, i) => {
        return (
          <Tab.Screen
            key={i}
            name={item.screenName}
            component={item.component}
            options={() => ({
              tabBarLabel: '',
              tabBarIcon: ({focused}) => {
                return focused ? <item.icon /> : <item.iconImg />;
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
