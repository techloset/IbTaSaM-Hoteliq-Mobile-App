import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigator from './BottomNavigator';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import DetailScreen from '../screens/detailScreen/DetailScreen';
import AccountScreen from '../screens/accountScreen/AccountScreen';
import SchduleScreen from '../screens/schduleScreen/SchduleScreen';
import profileScreen from '../screens/profileScreen/profileScreen';

import HomeTab from '../components/homeTabBtn/HomeBtn';
import ScheduleBtn from '../components/scheduleTabBtn/ScheduleBtn';
import AccountBtn from '../components/accountTabBtn/accountTabBtn';
import ProfileBtn from '../components/profileTabBtn/profileTabBtn';

import BookMark from '../assets/svg/bookmark.svg';
import Profile from '../assets/svg/profile.svg';
import Calendar from '../assets/svg/calendar.svg';
import House from '../assets/svg/Appointment.svg';

import {
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../utils/ResponsiveStyle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           height: heightPixel(72),
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           paddingHorizontal: pixelSizeHorizontal(24),
//           paddingVertical: pixelSizeVertical(16),
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) =>
//             focused ? <HomeTab /> : <House />,
//         }}
//       />
//       <Tab.Screen
//         name="Schedule"
//         component={SchduleScreen}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) =>
//             focused ? <ScheduleBtn /> : <Calendar />,
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountScreen}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) =>
//             focused ? <AccountBtn /> : <BookMark />,
//         }}
//       />

//       <Tab.Screen
//         name="account"
//         component={profileScreen}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) =>
//             focused ? <ProfileBtn /> : <Profile />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
import SCREENS from '../library/SCREENS';
import STACK_NAVIGATION from '../library/STACK_NAVIGATION';
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={SCREENS.BOTTOM_NAVIGATOR}
        screenOptions={{headerShown: false}}>
        {STACK_NAVIGATION.map((item, index) => {
          return (
            <Stack.Screen 
            key={index}
            name={item.screenName} component={item.component} />
          );
        })}
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
