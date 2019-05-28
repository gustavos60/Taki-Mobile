import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'
import Corredor from '../components/Corredor'
import { connect } from 'react-redux'
import { mapa } from '../mapa'


class MapScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      corredor: 0,
      corredores: []
    }
  }

  componentDidMount() {
    let corredores = []
    let itens = this.props.itens.filter(item => item.selected)
    mapa.forEach(linha => {
      linha.forEach(item => {
        if (item.tipo === 'prateleira') {
          let filtro = itens.filter(dado => dado.id === item.id)
          if (filtro.length > 0) {
            let corredor = item.idcorredor
            if (!corredores.includes(corredor)) corredores.push(corredor)
          }
        }
      })
    })
    this.setState({ corredores })
  }

  _renderMap = () => {
    if (this.state.corredor === 0) {
      return (
        <Map corredores={this.state.corredores} atualizaCorredor={(id) => this.setState({ corredor: id })} />
      )
    } else {
      return (
        <Corredor id={this.state.corredor} />
      )
    }
  }

  _buttonText = () => {
    if (this.state.corredor === 0) {
      return (
        <Text style={styles.routeText} >Traçar rota</Text>
      )
    } else {
      return (
        <Text style={styles.routeText} >Retornar ao mapa</Text>
      )
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um produto...' />
          <Text style={styles.storeText} >Arco Mix</Text>
        </View>
        <View style={styles.container} >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.rota}
            onPress={() => {
              this.setState({ corredor: 0 })
              this.props.navigation.navigate(this.state.corredor == 0 ? 'Route' : 'Map')
            }
            }>
            {this._buttonText()}
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          {this._renderMap()}
        </View>
        <TouchableOpacity
          style={styles.indicator}
          onPress={() => this.props.navigation.navigate('List')}
          activeOpacity={0.7}
        >
          <Text style={{ textAlign: 'center' }} >{this.props.total} itens selecionados. </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = (store) => ({
  total: store.itemState.totalSelected,
  itens: store.itemState.itens
})

export default connect(mapStateToProps, null)(MapScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 3,
    margin: 10,
    width: '90%'
  },
  corredor: {
    backgroundColor: '#666666',
    height: '100%',
    width: 15,
    borderRadius: 10,
  },
  corredorButton: {
    backgroundColor: '#47B036',
    borderRadius: 25,
    color: 'white',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  item: {
    backgroundColor: '#47B036',
    height: 30,
    width: 75,
    borderRadius: 15,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  storeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10
  },
  rota: {
    backgroundColor: '#47B036',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  routeText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  indicator: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#e1e1e1',
  }
})
