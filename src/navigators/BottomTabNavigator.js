import StoresScreen from "../screens/StoresScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator, BottomTabBar } from "reac-navigation-tabs";

const TabNavigator = createBottomTabNavigator({
    Stores: StoresScreen, 
    Main: MainScreen,
    Profile: ProfileScreen
});
