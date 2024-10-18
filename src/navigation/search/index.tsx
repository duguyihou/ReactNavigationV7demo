import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './SearchScreen';
import DetailScreen from './DetailScreen';

const SearchStack = createNativeStackNavigator({
  screens: {
    Search: SearchScreen,
    Detail: DetailScreen,
  },
});

export default SearchStack;
