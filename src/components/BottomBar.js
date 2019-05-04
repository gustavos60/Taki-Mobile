import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SearchBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon color='#a1a1a1' name='menu' size={30} onPress={() => this.props.navigator.navigate('Store')} />
        <Icon color='#a1a1a1' name='cart' size={30} onPress={() => this.props.navigator.navigate('Main')} />
        <Icon color='#a1a1a1' name='account' size={30} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
})
