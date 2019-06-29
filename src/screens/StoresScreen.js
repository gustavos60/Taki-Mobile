import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import SearchBar from '../components/SearchBar'
import Divider from '../components/Divider'
import Painel from '../components/Painel'


export default class HomeScreen extends Component {

  
  _toastWithDurationGravityHandler=()=>{
    //function to make Toast With Duration And Gravity
   ToastAndroid.showWithGravity(
      'Em breve disponível!',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.CENTER //can be TOP, BOTTON, CENTER
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um Atacadão ou Supermercado' />
        </View>
        <Divider />
        <View style={styles.storesContainer} >

          
        <Painel title='Supermercados' collapsed = {false} >
          <TouchableOpacity
              style={styles.store}
              onPress={() => this.props.navigation.navigate('Main')}>
              <Image style={styles.image} resizeMode='center' source={require('../../assets/images/arcomix.png')} />
              <View style={{flexDirection:'column'}}>
                <Text style={styles.storeText}>Arco Mix</Text>
                <Text style={styles.storeLocation}>Várzea</Text>
              </View>
            </TouchableOpacity>
          </Painel>

          <Painel title='Atacarejos' collapsed = {false} >
            <TouchableOpacity
              style={styles.store1}
              onPress={this._toastWithDurationGravityHandler}
            >
              <Image style={styles.image} resizeMode='center' source={require('../../assets/images/atacadao1.png')} />
              <View style={{flexDirection:'column'}}>
                <Text style={styles.storeText}>Atacadão</Text>
                <Text style={styles.storeLocation}>Camaragibe</Text>
              </View>
            </TouchableOpacity> 

            <TouchableOpacity
              style={styles.store1}
              onPress={this._toastWithDurationGravityHandler}
            >
              <Image style={styles.image} resizeMode='center' source={require('../../assets/images/atacadao1.png')} />
              <View style={{flexDirection:'column'}}>
                <Text style={styles.storeText}>Atacadão</Text>
                <Text style={styles.storeLocation}>Olinda</Text>
              </View>
            </TouchableOpacity> 
            
            <TouchableOpacity
              style={styles.store1}
              onPress={this._toastWithDurationGravityHandler}
            >
              <Image style={styles.image} resizeMode='center' source={require('../../assets/images/atacadao.png')} />
              <View style={{flexDirection:'column'}}>
                <Text style={styles.storeText}>Atacadão dos Presentes</Text>
                <Text style={styles.storeLocation}>Imbiribeira</Text>
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
  store1: {
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
    backgroundColor: 'grey'
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
