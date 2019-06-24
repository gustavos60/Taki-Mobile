import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen';
import AisleScreen from '../screens/AisleScreen';

const MainStackNavigator = createStackNavigator({
  Main: { screen: MainScreen, navigationOptions: { header: null } },
  List: { screen: ListScreen, navigationOptions: { header: null } },
  Map: { screen: MapScreen, navigationOptions: { header: null } },
  Route: {screen: RouteScreen, navigationOptions: { header: null }},
  Aisle: {screen: AisleScreen, navigationOptions: { header: null }}
}, {
    headerMode: 'screen',
    initialRouteName: 'Main'
  })

export default createAppContainer(MainStackNavigator)