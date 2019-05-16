import MainScreen from '../screens/MainScreen'
import ListScreen from '../screens/ListScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainStackNavigator = createStackNavigator ({
    Main: MainScreen,
    List: ListScreen
}, {
    headerMode: 'screen'
})

export default createAppContainer(MainStackNavigator)