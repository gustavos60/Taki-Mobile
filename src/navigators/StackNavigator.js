import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabNavigator from './TabNavigator';
import MapStackNavigator from './MapStackNavigator';

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  Store: { screen: TabNavigator, navigationOptions: { header: null } },
  Map: {screen: MapStackNavigator, navigationOptions: {header: null } }
}, {
    headerMode: 'screen',
  })

export default createAppContainer(StackNavigator)