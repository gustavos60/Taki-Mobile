import StoresScreen from "../screens/StoresScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator({
    Stores: StoresScreen, 
    Main: MainScreen,
    Profile: ProfileScreen
});

export default createAppContainer(TabNavigator);