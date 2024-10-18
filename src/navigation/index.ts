import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home';
import SearchStack from './search';



const RootStack = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    HomeStack: HomeStack,
    SearchStack: SearchStack,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;

type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
