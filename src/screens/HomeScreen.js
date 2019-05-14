import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LoginButton from '../components/LoginButton'

export default class HomeScreen extends Component {
//oi
  render() {
    return (
      <LinearGradient colors={['#D57300', '#F5276E']} useAngle={true} angle={36} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.container}>
        <Image style={styles.logo} resizeMode='center' source={require('../../assets/images/logo.png')} />
        <LoginButton text="Continuar com Google" onPress={() => this.props.navigation.navigate('Store')} />
        <LoginButton text="Continuar com Facebook" onPress={() => this.props.navigation.navigate('Store')} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: '30%',
    marginBottom: 30,
  }
})
