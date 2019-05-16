import StoresScreen from "../screens/StoresScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator({
    Lojas: StoresScreen, 
    Carrinho: MainScreen,
    Configurações: ProfileScreen
});

export default createAppContainer(TabNavigator);