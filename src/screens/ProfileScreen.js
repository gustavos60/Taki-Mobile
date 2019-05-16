import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ProfileScreen extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {styles.userText}>Configurações do usuário</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    userText: {
        color: 'blue',
        justifyContent: 'center'
    },  
})