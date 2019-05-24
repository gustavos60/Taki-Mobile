import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'
import { connect } from 'react-redux'


class MapScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      corredor: 0,
    }
  }

  _renderMap = () => {
    if (this.state.corredor === 0) {
      return (
        <View style={styles.image} >
          <View style={styles.corredor}>
          </View>
          <TouchableOpacity
            style={styles.corredorButton}
            activeOpacity={0.6}
            onPress={() => this.setState({ corredor: 1 })} >
            <Text style={[styles.routeText, { fontSize: 40 }]} >01</Text>
          </TouchableOpacity>
          <View style={styles.corredor}>
          </View>
          <TouchableOpacity
            style={styles.corredorButton}
            activeOpacity={0.6}
            onPress={() => this.setState({ corredor: 1 })} >
            <Text style={[styles.routeText, { fontSize: 40 }]} >02</Text>
          </TouchableOpacity>
          <View style={styles.corredor}>
          </View>
          <TouchableOpacity
            style={styles.corredorButton}
            activeOpacity={0.6}
            onPress={() => this.setState({ corredor: 1 })} >
            <Text style={[styles.routeText, { fontSize: 40 }]} >03</Text>
          </TouchableOpacity>
          <View style={styles.corredor}>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.image} >
          <View style={styles.corredor}>
          </View>
          <View style={{ justifyContent: 'space-around', height: '100%' }} >
            <TouchableOpacity style={styles.item} >
              <Text style={{ color: 'white' }} > {'<-'} Copos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} >
              <Text style={{ color: 'white' }} > {'<-'} Pratos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} >
              <Text style={{ color: 'white' }} > {'<-'} Balões</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.corredor}>
          </View>
        </View>
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
          <Text style={styles.storeText} >Atacado dos Presentes</Text>
        </View>
        <View style={styles.container} >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.rota}
            onPress={() => this.setState({ corredor: 0 })}>
            {this._buttonText()}
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Map />
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
  }
})
