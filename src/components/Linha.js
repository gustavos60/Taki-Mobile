import React, { Component } from 'react'
import { FlatList, View, TouchableOpacity, Text } from 'react-native'
import { Dimensions } from 'react-native'
import { corredorColors } from '../colors'
import { connect } from 'react-redux'

class Linha extends Component {

  _renderNum = (item) => {
    if (item.item.num) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', color: '#000000' }} >
          <Text>{item.item.id}</Text>
        </View>
      )
    } else return null
  }


  render() {

    const { width } = Dimensions.get('window')
    const itemWidth = width * 0.9 / 36
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ height: this.props.itemHeight, width: '100%' }}
        data={this.props.dado}
        horizontal={true}
        keyExtractor={(item, index) => '' + index}
        renderItem={(item) => {

          let backgroundColor, width
          let selected = false
          let corredor = false
          switch (item.item.tipo) {
            case 'entrada':
              backgroundColor = '#00FF00'
              width = 6 * itemWidth
              break;
            case 'prateleira':
              backgroundColor = '#808080'
              text = item.item.categoria
              selected = this.props.itens[item.item.id].selected
              width = itemWidth
              break;
            case 'corredor':
              let id = item.item.id
              if (this.props.corredores.includes(id)) {
                backgroundColor = 'rgb(204, 246, 197)'
              }
              else backgroundColor = '#E0E0E0'
              corredor = true
              width = 4 * itemWidth
              break;
            default:
              width = 2 * itemWidth
              if (item.item.id && this.props.corredores.includes(item.item.id)) backgroundColor = '#AA11557f'
              else backgroundColor = '#E0E0E0'
              break;
          }
          if (corredor) {
            return <TouchableOpacity
              activeOpacity={0.7}
              style={{ backgroundColor, width }}
              onPress={() => {
                this.props.atualizaCorredor(item.item.id)
              }}
            >
              {this._renderNum(item)}
            </TouchableOpacity>
          }
          else {
            if (selected) backgroundColor = '#FFA451'
            return <View style={{ backgroundColor, width }} />
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