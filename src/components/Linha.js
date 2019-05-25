import React, { Component } from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

import { connect } from 'react-redux'

class Linha extends Component {

  render() {

    const { width } = Dimensions.get('window')
    const itemWidth = width * 0.9 / this.props.dado.length
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ height: this.props.itemHeight, width: '100%' }}
        data={this.props.dado}
        horizontal={true}
        keyExtractor={(item, index) => '' + index}
        renderItem={(item) => {

          let text, backgroundColor
          let selected = false
          let corredor = false
          switch (item.item.tipo) {
            case 'entrada':
              backgroundColor = '#00FF00'
              text = 'Entrada'
              break;
            case 'prateleira':
              backgroundColor = '#0000FF'
              text = item.item.categoria
              selected = this.props.itens[item.item.id].selected
              break;
            case 'corredor':
              backgroundColor = '#E0E0E0'
              text = 'Corredor ' + item.item.id
              corredor = true
              break;
            default:
              backgroundColor = '#000000'
              break;
          }
          if (corredor) {
            return <TouchableOpacity
              activeOpacity={0.7}
              style={{ backgroundColor, width: itemWidth }}
              onPress={() => {
                this.props.atualizaCorredor(item.item.id)
                // ToastAndroid.show(text, ToastAndroid.SHORT)
              }}
            ></TouchableOpacity>
          } else {
            if (selected) backgroundColor = '#44FF66'
            return <View style={{ backgroundColor, width: itemWidth }} />
          }
        }}
      />
    )
  }
}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens
})

export default connect(mapStateToProps, null)(Linha)