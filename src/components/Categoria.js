import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Item from './Item'
import { connect } from 'react-redux'

class Categoria extends Component {

  constructor(props) {
    super(props)
    let itens = this.props.itens.filter((item) => item.idCategoria === this.props.id)
    this.state = {
      itens: itens
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.itens}
        renderItem={({ item }) => {
          if (item.nome.includes(this.props.filtro))
            return <Item id={item.id} imageId={item.idImagem} text={item.nome} />
          else return null
        }}
        keyExtractor={(item) => item.id}
        style={{ marginLeft: 10 }}
        numColumns={2}
      />
    )
  }
}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens
})

export default connect(mapStateToProps, null)(Categoria)
