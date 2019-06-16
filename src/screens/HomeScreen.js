import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LoginButton from '../components/LoginButton'

export default class HomeScreen extends Component {

  render() {
    return (
      <LinearGradient colors={['#D57300', '#F5276E']} useAngle={true} angle={36} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.container}>
        <Image style={styles.logo} resizeMode='center' source={require('../../assets/images/logo.png')} />
        <LoginButton 
          style ={styles.icon} text="Continuar com Google" 
          iconName='google'
          color='#3270f0'
          onPress={() => this.props.navigation.navigate('Store')} 
        />
      </LinearGradient>
    )
  }
}
/*
<LoginButton 
          text="Continuar com Facebook" 
          color='#3b5998'
          iconName='facebook'
          onPress={() => this.props.navigation.navigate('Store')} 
        />
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '40%',
    marginBottom: 30,
  }
})
