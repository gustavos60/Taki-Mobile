import React, { Component } from 'react'
import StackNavigator from './navigators/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <StackNavigator />
      </Provider>
    )
  }
}

