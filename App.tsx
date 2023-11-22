import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/homeScreen/HomeScreen';
import DetailScreen from './src/screens/detailScreen/DetailScreen';
import AccountScreen from './src/screens/accountScreen/AccountScreen';
import SchduleScreen from './src/screens/schduleScreen/SchduleScreen';

import HomeTab from './src/components/homeTabBtn/HomeBtn';
import ScheduleBtn from './src/components/scheduleTabBtn/ScheduleBtn';

import BookMark from './src/img/homeImg/bookmark.svg';
import Account from './src/img/homeImg/profile.svg';
import Calendar from './src/img/homeImg/calendar.svg';
import House from './src/img/homeImg/Appointment.svg';

import {
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from './src/utils/ResponsiveStyle';

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
          name="Detailjkj"
          component={AccountScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => <BookMark />,
          }}
        />

        <Tab.Screen
          name="account"
          component={AccountScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => <Account />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
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

export default App;