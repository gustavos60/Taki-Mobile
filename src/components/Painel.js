import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Collapsible from 'react-native-collapsible'

export default class Painel extends Component {
  constructor(props) {
    super(props)

    this.icons = {
      'up': 'chevron-up',
      'down': 'chevron-down'
    }

    this.state = {
      title: props.title,
      expanded: props.expanded,
    }
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    let icon = this.icons['up']

    if (this.state.expanded) {
      icon = this.icons['down']
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.toggle()}
          >
            <Icon size={30} name={icon} style={{ marginRight: 10 }} />
          </TouchableOpacity>

        </View>
        <Collapsible style={styles.body} collapsed={this.state.expanded} >
          {this.props.children}
        </Collapsible>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    overflow: 'hidden',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    zIndex: 5,
    left: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
    fontSize: 15,
  },
  body: {
    padding: 10,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})