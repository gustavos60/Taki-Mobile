import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  Store: { screen: TabNavigator, navigationOptions: { header: null } },
}, {
    headerMode: 'screen',
    initialRouteName: 'Home'
  })

export default createAppContainer(StackNavigator)