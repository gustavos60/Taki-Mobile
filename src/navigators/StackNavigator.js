import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabNavigator from './TabNavigator';
import MapStackNavigator from './MapStackNavigator';
import RouteScreen from '../screens/RouteScreen';

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  Store: { screen: TabNavigator, navigationOptions: { header: null } },
  Map: {screen: MapStackNavigator, navigationOptions: {header: null } },
  Route: {screen: RouteScreen, navigationOptions: {header: null}}
}, {
    headerMode: 'screen',
    initialRouteName: 'Store'
  })

export default createAppContainer(StackNavigator)