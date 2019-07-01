import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import Categoria from '../components/Categoria'
import Painel from '../components/Painel'
import Divider from '../components/Divider'
import LoginButton from '../components/LoginButton'


class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      busca: ''
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder='Busque um produto...'
            value={this.state.busca}
            onChangeText={(text) => this.setState({ busca: text })}
          />
        </View>
        <Divider />
        <View style={styles.categoriasContainer} >
          <ScrollView style={{ flex: 5 }} >
            <Painel title='Higiene Pessoal' collapsed={true} children={<Categoria filtro={this.state.busca} id={4} />} />
            <Divider />
            <Painel title='Carnes, Peixes e Ovos' collapsed={true} children={<Categoria filtro={this.state.busca} id={2} />} />
            <Divider />
            <Painel title='Frutas e Verduras' collapsed={true} children={<Categoria filtro={this.state.busca} id={5} />} />
            <Divider />
            <Painel title='Laticínios' collapsed={true} children={<Categoria filtro={this.state.busca} id={6} />} />
            <Divider />
            <Painel title='Limpeza' collapsed={true} children={<Categoria filtro={this.state.busca} id={3} />} />
            <Divider />
            <Painel title='Supermercado' collapsed={true} children={<Categoria filtro={this.state.busca} id={1} />} />
            <Divider />
          </ScrollView>
        </View>
        <LoginButton
          color='#47B036'
          text='Ir às compras'
          iconName='shopping'
          textColor='white'
          onPress={() => this.props.navigation.navigate('Map')}
        />
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
  total: store.itemState.totalSelected
})

export default connect(mapStateToProps, null)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#ffa451',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  categoriasContainer: {
    flex: 5,
    width: '100%',

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
