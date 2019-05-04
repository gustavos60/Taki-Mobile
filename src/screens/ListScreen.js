import React, { Component } from 'react'
import { View, StyleSheet, Image, FlatList, Text } from 'react-native'

import { connect } from 'react-redux'
import { toggleSelected } from '../redux/actions/itemActions'
import { images } from '../images'
import BottomBar from '../components/BottomBar'
import LoginButton from '../components/LoginButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class ListScreen extends Component {

  constructor(props) {
    super(props)
    let itens = this.props.itens
    let selectedItems = itens.filter((item) => item.selected)
    this.state = {
      selectedItems: selectedItems
    }
  }

  _renderItem(item) {
    return (
      <View>
        <View style={styles.item} >
          <Image style={[styles.image, { marginLeft: 30 }]} resizeMode='center' source={images[item.idImagem]} />
          <Text style={styles.text} >{item.nome}</Text>
          <Icon style={{ marginRight: 10 }} name='close' size={30} onPress={() => this._removeItem(item.id)} />
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#c3c3c3' }} ></View>
      </View>
    )
  }

  _removeItem(id) {
    let selected = this.state.selectedItems.filter((item) => item.id != id)
    this.setState({
      selectedItems: selected
    })
    this.props.toggleSelected(id)
  }

  render() {

    return (
      <View style={styles.container} >
        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>
          <Text>{this.props.total} itens selecionados.</Text>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#c3c3c3' }} ></View>
        <FlatList
          data={this.state.selectedItems}
          keyExtractor={(item) => '' + item.id}
          renderItem={({ item }) => this._renderItem(item)}
        />
        <View style={{ alignItems: "center" }} >
          <LoginButton
            color='#47B036'
            text='Ir as compras!'
            textColor='white'
            onPress={() => this.props.navigation.navigate('Map')}
          />
        </View>
        <BottomBar navigator={this.props.navigation} />
      </View>
    )
  }

}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens,
  total: store.itemState.totalSelected
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSelected: (id) => dispatch(toggleSelected(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    width: '100%'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 80
  },
  image: {
    height: 60,
    width: 60,
  },
  topText: {
    textAlign: 'center'
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  }
})