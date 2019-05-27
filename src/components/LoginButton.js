import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class LoginButton extends Component {

  render() {

    let backgroundColor = (this.props.color) ? this.props.color : '#3b5998'
    let textColor = (this.props.textColor) ? this.props.textColor : 'white'

    return (
      <TouchableOpacity
        //activeOpacity={0.7}
        style={[styles.container, { backgroundColor: backgroundColor }]}
        onPress={() => this.props.onPress()}>

        <Icon style={[styles.icon, { color: textColor }]} size={25} name='facebook'/>
        <Text style={[styles.text, { color: textColor }]} >{this.props.text}</Text>

      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#3b5998',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 50,
    elevation: 1,
    marginBottom: 10
  },
  icon: {
    position: 'absolute',
    left: '5%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,

  }
})

const gstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#dc4335',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 50,
    elevation: 1,
    marginBottom: 10
  },
  icon: {
    position: 'absolute',
    left: '5%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,

  }
})


