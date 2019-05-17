import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MapScreen from '../screens/MapScreen';

const MainStackNavigator = createStackNavigator({
  Main: { screen: MainScreen, navigationOptions: { header: null } },
  List: { screen: ListScreen, navigationOptions: { header: null } },
  Map: { screen: MapScreen, navigationOptions: { header: null } }
}, {
    headerMode: 'screen'
  })

export default createAppContainer(MainStackNavigator)