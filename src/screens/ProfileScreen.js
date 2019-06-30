import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import Divider from '../components/Divider'
import LoginButton from "../components/LoginButton";
import { GoogleSignin, statusCodes } from 'react-native-google-signin'
import { addUser } from '../redux/actions/userActions'
import { addToken } from '../api/api'


class ProfileScreen extends Component {

    signIn = async () => {
        try {
          await GoogleSignin.configure({
            webClientId: '206610878188-2urtn9te6pua4h1r7sgtbd220rtfk43e.apps.googleusercontent.com',  
            forceConsentPrompt: true, 
          })
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn()
          this.props.addUser(userInfo)
          addToken(userInfo.idToken)
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

    _renderUser = () => {
        if (this.props.nome != undefined) {
            return (
                <View >
                    <TouchableOpacity style={styles.store}>
                        <Image style={styles.circle} resizeMode='contain' source = {{uri: this.props.foto}} />
                    </TouchableOpacity>
    
                    <View style={styles.userContainer} >
                        <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Nome:</Text>
                        <Text style=  {[{color: 'black'}, {fontSize: 24} ]} >{this.props.nome + '\n'}</Text>
                        <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Sobrenome:</Text>
                        <Text style=  {[{color: 'black'}, {fontSize: 24} ]} >{this.props.sobrenome + '\n'}</Text>
                        <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Email:</Text>
                        <Text style=  {[{color: 'black'}, {fontSize: 24} ]} >{this.props.email + '\n'}</Text>
                    </View>
                    <Divider />
                </View>
            )
        } else {
            return(
                <View style={styles.infoView}>
                    <Text style={styles.infoText}>Por favor, realize o login para visualizar seus dados.</Text>
                    <LoginButton 
                        text="Continuar com Google" 
                        iconName='google'
                        color='#3270f0'
                        onPress={() => this.signIn()} 
                    />
                </View>
            )
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.userText}>{'\nConta'}</Text>
                {this._renderUser()}
            </View>    
        )
    }
}

const mapStateToProps = (store) => ({
    nome: store.userState.user == undefined ? undefined : store.userState.user.givenName,
    sobrenome: store.userState.user == undefined ? undefined : store.userState.user.familyName,
    email : store.userState.user == undefined ? undefined : store.userState.user.email,
    foto : store.userState.user == undefined ? undefined : store.userState.user.photo
})

const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (user) => dispatch(addUser(user)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    userContainer: {
      backgroundColor: 'white',
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      left: '5%',
      marginTop: '10%'
    },
    userText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffa451',
        width: '100%',
        height: 80,
        fontSize: 24
    },
    infoText: {
        fontSize: 16,
        color: '#FFA451',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '60%',
        height: '20%',
    },
    infoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginTop: '10%'
    },
    store: {
        alignSelf: 'center'
    }  
  })