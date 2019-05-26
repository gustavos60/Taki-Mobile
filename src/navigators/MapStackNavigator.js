import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen'
import AisleScreen from '../screens/AisleScreen'

const MapStackNavigator = createStackNavigator({
    Map: { screen: MapScreen, navigationOptions: { header: null }},
    Route: {screen: RouteScreen, navigationOptions: { header: null}},
    Aisle: {screen: AisleScreen, navigationOptions: {header: null}}
}, {
    headerMode: 'screen'
  })

export default createAppContainer(MapStackNavigator)