import HomeScreen from '../screens/HomeScreen'
import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import StoresScreen from '../screens/StoresScreen'
import MapScreen from '../screens/MapScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  Main: { screen: MainScreen, navigationOptions: { header: null } },
  List: { screen: ListScreen, navigationOptions: { header: null } },
  Store: { screen: StoresScreen, navigationOptions: { header: null } },
  Map: { screen: MapScreen, navigationOptions: { header: null } },
}, {
    headerMode: 'screen'
  })

export default createAppContainer(StackNavigator)