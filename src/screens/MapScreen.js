import React, { Component } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBar'
import { connect } from 'react-redux'

class MapScreen extends Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um produto...' />
          <Text style={styles.storeText} >Atacado dos Presentes</Text>
        </View>
        <View style={styles.container} >
          <TouchableOpacity activeOpacity={0.7} style={styles.rota} >
            <Text style={styles.routeText} >Traçar rota</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/mapa.png')} />
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
    marginRight: 15,
    marginLeft: 15
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
  }
})
