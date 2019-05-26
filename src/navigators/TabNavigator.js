import StoresScreen from "../screens/StoresScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainStackNavigator from "./MainStackNavigator";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const TabNavigator = createBottomTabNavigator(
    {
        Lojas: StoresScreen, 
        Compras: MainStackNavigator,
        Conta: ProfileScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            // Configura os ícones presentes na tabNavigator de acordo com o nome da rota
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Lojas':
                        iconName = 'menu'
                        break;
                    case 'Compras':
                        iconName = 'cart'
                        break;
                    case 'Conta':
                        iconName = 'account'
                        break;
                    default:
                        break;
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);