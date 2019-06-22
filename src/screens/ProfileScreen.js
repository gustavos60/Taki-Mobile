import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Divider from '../components/Divider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ProfileScreen extends Component {
    render () {
        return (
            <View style = {styles.container}>
                
                <Text style = {styles.userText}>
                    <Icon style={[styles.icon, { color: 'white' }]} size={25} name={'chevron-left'}/> {'\n Editar Conta'}</Text>
                
                <TouchableOpacity
                    style={styles.store}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    <Image style={styles.circle} resizeMode='center' source={require('../../assets/images/lucas.png')} />
                </TouchableOpacity>

                <View style={styles.userContainer} >
                    <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Nome</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 24} ]}>{'Lucas \n'}</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Sobrenome</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 24} ]}>{'Silva \n'}</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Telefone</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 24} ]}>{'81 99425-3486 \n'}</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 16} ]}>Email</Text>
                    <Text style = {[{color: 'black'}, {fontSize: 24} ]}>{'lucassilva21@gmail.com \n'}</Text>
                </View>
                <Divider />
            </View>
            
        )
    }
}

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
        flexDirection: 'row',
        backgroundColor: '#ffa451',
        width: '100%',
        height: 80,
        fontSize: 24
    },
    icon: {
        position: 'absolute',
        left: '5%',
      }, 
      circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        //backgroundColor: '#ffa451',
        marginTop: '10%'
    },
    profileImgContainer: {
        marginLeft: 8,
        height: 82,
        width: 82,
        borderRadius: 40,
        borderWidth: 1
  },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
  },  
  })