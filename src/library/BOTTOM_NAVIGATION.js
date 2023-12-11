import SCREENS from './SCREENS';

import HomeBtn from '../components/homeTabBtn/HomeBtn';
import ScheduleBtn from '../components/scheduleTabBtn/ScheduleBtn';
import AccountBtn from '../components/accountTabBtn/accountTabBtn';
import ProfileBtn from '../components/profileTabBtn/profileTabBtn';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import SchduleScreen from '../screens/schduleScreen/SchduleScreen';
import AccountScreen from '../screens/accountScreen/AccountScreen';
import profileScreen from '../screens/profileScreen/profileScreen';

import BookMark from '../assets/svg/bookmark.svg';
import Profile from '../assets/svg/profile.svg';
import Calendar from '../assets/svg/calendar.svg';
import House from '../assets/svg/Appointment.svg';

const BOTTOM_NAVIGATION = [
  {
    screenName: SCREENS.HOME,
    component: HomeScreen,
    icon: HomeBtn,
    iconImg: House,
  },
  {
    screenName: SCREENS.SCHDULE,
    component: SchduleScreen,
    icon: ScheduleBtn,
    iconImg: Calendar,
  },
  {
    screenName: SCREENS.ACCOUNT,
    component: AccountScreen,
    icon: AccountBtn,
    iconImg: BookMark,
  },
  {
    screenName: SCREENS.PROFILE,
    component: profileScreen,
    icon: ProfileBtn,
    iconImg: Profile,
  },
];
export default BOTTOM_NAVIGATION;
