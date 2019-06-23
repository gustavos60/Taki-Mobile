import React, { Component } from 'react'
import { StyleSheet, Image, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LoginButton from '../components/LoginButton'
import { GoogleSignin, statusCodes } from 'react-native-google-signin'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions/userActions'

class HomeScreen extends Component {

  signIn = async () => {
    try {
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
        webClientId: '206610878188-2urtn9te6pua4h1r7sgtbd220rtfk43e.apps.googleusercontent.com',  
        forceConsentPrompt: true, 
      })
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn()
      console.log(userInfo)
      this.props.addUser(userInfo)
      this.props.navigation.navigate('Store')
    } catch (error) {
      Alert.alert('Erro de autenticação', JSON.stringify(error))
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <LinearGradient colors={['#D57300', '#F5276E']} useAngle={true} angle={36} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.container}>
        <Image style={styles.logo} resizeMode='center' source={require('../../assets/images/logo.png')} />
        <LoginButton 
          style ={styles.icon} text="Continuar com Google" 
          iconName='google'
          color='#3270f0'
          onPress={() => this.signIn()} 
        />
        <LoginButton 
          style ={styles.icon} text="Continuar sem fazer login" 
          iconName='google'
          color='#3270f0'
          onPress={() => this.props.navigation.navigate('Store')} 
        />
      </LinearGradient>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)


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
