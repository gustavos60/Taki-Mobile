import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class ProfileScreen extends Component {
    render () {
        return (
            <View>
                <Text style = {styles.userText}>Configurações do usuário</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userText: {
        color: 'blue',
        flex: 1,
        justifyContent: 'center'
    },  
})