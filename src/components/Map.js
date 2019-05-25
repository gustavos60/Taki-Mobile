import { mapa } from '../mapa'
import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Linha from './Linha'

export default class Map extends Component {

  render() {

    const itemHeight = '' + 100 / mapa.length + '%'
    return (
      <View style={styles.container}>
        <FlatList
          data={mapa}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item, index) => '' + index}
          renderItem={(linha) => <Linha atualizaCorredor={this.props.atualizaCorredor} itemHeight={itemHeight} dado={linha.item} />}
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
