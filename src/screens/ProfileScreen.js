import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import Divider from '../components/Divider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { userReducer } from '../redux/reducers/userReducer'


class ProfileScreen extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {styles.userText}>{'\nConta'}</Text>
                
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
    }
}

const mapStateToProps = (store) => ({
    nome  : store.userState.user.givenName,
    sobrenome: store.userState.user.familyName,
    email : store.userState.user.email,
    foto : store.userState.user.photo
})

export default connect(mapStateToProps, null)(ProfileScreen)


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
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
    icon: {
        position: 'absolute',
        left: '50%'
      }, 
      circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        //backgroundColor: '#ffa451',
        marginTop: '10%'
    },  
  })