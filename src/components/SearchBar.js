import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SearchBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} size={25} name='magnify' color='blue' />
        <TextInput style={styles.text}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeText={(text) => {
            if (this.props.onChangeText) this.props.onChangeText(text)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    borderRadius: 25,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 15,
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
    flex: 1,
  }
})
