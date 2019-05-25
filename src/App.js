import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import StackNavigator from './navigators/StackNavigator'

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <StackNavigator />
      </Provider>
    )
  }
}

