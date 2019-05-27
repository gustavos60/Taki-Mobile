import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MapStackNavigator from './MapStackNavigator';

const MainStackNavigator = createStackNavigator({
  Main: { screen: MainScreen, navigationOptions: { header: null } },
  List: { screen: ListScreen, navigationOptions: { header: null } },
  Map: { screen: MapStackNavigator, navigationOptions: { header: null } }
}, {
    headerMode: 'screen'
  })

export default createAppContainer(MainStackNavigator)