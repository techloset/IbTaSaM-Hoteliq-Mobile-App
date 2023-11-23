import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/homeScreen/HomeScreen';
import DetailScreen from '../../screens/detailScreen/DetailScreen';
import AccountScreen from '../../screens/accountScreen/AccountScreen';
import SchduleScreen from '../../screens/schduleScreen/SchduleScreen';
import profileScreen from '../../screens/profileScreen/profileScreen';

import HomeTab from '../../components/homeTabBtn/HomeBtn';
import ScheduleBtn from '../../components/scheduleTabBtn/ScheduleBtn';
import AccountBtn from '../../components/accountTabBtn/accountTabBtn';
import ProfileBtn from '../../components/profileTabBtn/profileTabBtn';

import BookMark from '../../assets/svg/bookmark.svg';
import Profile from '../../assets/svg/profile.svg';
import Calendar from '../../assets/svg/calendar.svg';
import House from '../../assets/svg/Appointment.svg';

import {
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <>
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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) =>
              focused ? <HomeTab /> : <House />,
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={SchduleScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) =>
              focused ? <ScheduleBtn /> : <Calendar />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) =>
              focused ? <AccountBtn /> : <BookMark />,
          }}
        />

        <Tab.Screen
          name="account"
          component={profileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) =>
              focused ? <ProfileBtn /> : <Profile />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
