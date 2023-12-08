import BottomNavigator from '../navigation/BottomNavigator';
import DetailScreen from '../screens/detailScreen/DetailScreen';
import SCREENS from './SCREENS';

const STACK_NAVIGATION = [
  {
    screenName: SCREENS.BOTTOM_NAVIGATOR,
    component: BottomNavigator,
  },
  {
    screenName: SCREENS.Detail,
    component: DetailScreen,
  },
];

export default STACK_NAVIGATION;
