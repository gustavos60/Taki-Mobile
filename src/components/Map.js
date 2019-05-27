import { mapa } from '../mapa'
import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Linha from './Linha'

export default class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  render() {

    let itemHeight = this.state.height / mapa.length
    return (
      <View style={styles.container} onLayout={(event) => {
        let { height } = event.nativeEvent.layout
        this.setState({ height })
      }} >
        <FlatList
          data={mapa}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item, index) => '' + index}
          renderItem={(linha) =>
            <Linha
              atualizaCorredor={this.props.atualizaCorredor}
              itemHeight={itemHeight}
              dado={linha.item} />}
        />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})
