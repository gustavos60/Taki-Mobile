import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen'

const MainStackNavigator = createStackNavigator({
    Map: { screen: MapScreen, navigationOptions: { header: null } },
    RouteScreen: RouteScreen
}, {
    headerMode: 'screen'
  })

export default createAppContainer(MainStackNavigator)