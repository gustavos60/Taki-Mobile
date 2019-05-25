import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen'

const MapStackNavigator = createStackNavigator({
    Map: { screen: MapScreen, navigationOptions: { header: null } },
    Route: {screen: RouteScreen, navigationOptions: { header: null}}
}, {
    headerMode: 'screen'
  })

export default createAppContainer(MapStackNavigator)