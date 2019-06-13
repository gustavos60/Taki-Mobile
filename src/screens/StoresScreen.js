import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import Divider from '../components/Divider'
import Painel from '../components/Painel'


export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um Atacadão ou Supermercado' />
        </View>
        <Divider />
        <View style={styles.storesContainer} >
          <Painel title='Atacadão' expanded = {false} >
            <TouchableOpacity
              style={styles.store}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image style={styles.image} resizeMode='center' source={require('../../assets/images/arcomix.png')} />
              <View style={{flexDirection:'column'}}>
                <Text style={styles.storeText}>Arco Mix</Text>
                <Text style={styles.storeLocation}>Várzea</Text>
              </View>
            </TouchableOpacity>
          </Painel>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  searchContainer: {
    backgroundColor: '#ffa451',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  storesContainer: {
    flex: 5,
  },
  store: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 70,
    borderWidth: 0.7,
    borderColor: 'grey',
    elevation: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  storeText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  storeLocation: {
    fontSize: 12,
  },
  image: {
    height: 60,
    width: 60,
    margin: '5%'
  }
})
