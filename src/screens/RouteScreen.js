import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class RouteScreen extends Component {
    render() {
        return (
            <View syle = {style.container}>
                <Text> Tela da rota pelos corredores </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})