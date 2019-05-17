import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import Categoria from '../components/Categoria'
import Painel from '../components/Painel'
import Divider from '../components/Divider'


class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer}>
          <SearchBar placeholder='Busque um produto...' />
        </View>
        <Divider />
        <View style={styles.categoriasContainer} >
          <ScrollView style={{ flex: 5 }} >
            <Painel title='Escritorio' children={<Categoria id={1} />} />
            <Divider />
            <Painel title='Festas' children={<Categoria id={2} />} />
            <Divider />
          </ScrollView>
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
