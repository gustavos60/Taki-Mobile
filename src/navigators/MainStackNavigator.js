import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MapScreen from '../screens/MapScreen';

const MainStackNavigator = createStackNavigator ({
    Main: MainScreen,
    List: ListScreen,
    Map: MapScreen
}, {
    headerMode: 'screen'
})

export default createAppContainer(MainStackNavigator)