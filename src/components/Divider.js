import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Divider extends Component {
  render() {
    return (
      <View style={styles.divider} >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#d1d1d1'
  }
})