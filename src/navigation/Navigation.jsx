import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SCREENS from '../library/SCREENS';
import STACK_NAVIGATION from '../library/STACK_NAVIGATION';
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.BOTTOM_NAVIGATOR}
        screenOptions={{headerShown: false}}>
        {STACK_NAVIGATION.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.screenName}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
