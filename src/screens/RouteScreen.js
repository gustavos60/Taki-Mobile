import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../components/SearchBar';
import Corredor from '../components/Corredor';
import Entrance from '../components/Entrance'
import { connect } from 'react-redux';
import MapAndRoute from '../components/MapAndRoute';
import { atualizaRota, nextRota, prevRota } from '../redux/actions/rotaActions';

class RouteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          actualAisle: this.props.indAtual,
          aisleArray: this.props.rotaArray
        };
      }

      _renderLeftArrow() {
        if (this.props.indAtual > 0) {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.prevRota()
                  this.setState({actualAisle: this.props.indAtual})
                }}
              >
                <Icon 
                  name='chevron-left'
                  size={50}
                  color='#DA6711'
                />
              </TouchableOpacity>
            </View>
          )
        } else {
          return (
            <View>
              <Icon 
                name='chevron-left'
                size={50}
                color='lightgrey'
              />
            </View>
          )
        }

      }

      _renderRightArrow() {
        let arraySize = this.props.rotaArray.length

        if (arraySize > 1 && this.props.indAtual < arraySize - 1) {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.nextRota()
                  this.setState({actualAisle: this.props.indAtual})
                }}
              >
                <Icon 
                  name='chevron-right'
                  size={50}
                  color='#DA6711'
                />
              </TouchableOpacity>
            </View>
          )
        } else {
          return (
            <View>
              <Icon 
                name='chevron-right'
                size={50}
                color='lightgrey'
              />
            </View>
          )
        }
      }

      _renderAisle() {
        if (this.state.aisleArray == null) {
          return (
            <View style={styles.emptyList}>
              <Text style={styles.emptyListText}> Você não possui itens na sua lista. Adicione itens na sua lista clicando no carrinho.</Text>
            </View>
          )
          
        } else {
          return (
            <View style={styles.aisleAndArrows}>
              {this._renderLeftArrow()}
              <View style={styles.aisle}>
                <Corredor id={this.props.rotaArray[this.props.indAtual]}/>
              </View>
              {this._renderRightArrow()}
            </View>
          )
        }
      }

      render() {
        console.warn(this.state.aisleArray[this.state.actualAisle])
        console.warn('indAtual(props): ' + this.props.indAtual)
        console.warn('actualAisle(state): ' + this.state.actualAisle)
        return (
        <View style={styles.container}>
            <View style={styles.searchContainer} >
              <SearchBar placeholder='Busque um produto...' />
              <MapAndRoute 
                store='Arco Mix'
                onMapPress={() => this.props.navigation.navigate('Map')}
                onRoutePress={() => this.props.navigation.navigate('Route')}
              />
            </View>
            <View style={styles.image}>
              {this._renderAisle()}
            </View>
            <Entrance />
            <TouchableOpacity
              style={styles.indicator}
              onPress={() => this.props.navigation.navigate('List')}
              activeOpacity={0.7}
            >
            <Text style={{ textAlign: 'center' }} >{this.props.total} itens selecionados. </Text>
          </TouchableOpacity>
        </View>
          
          );
        }
      
}

const mapStateToProps = (store) => ({
  rotaArray: store.rotaState.rotaArray,
  indAtual: store.rotaState.indAtual,
  total: store.itemState.totalSelected,
  itens: store.itemState.itens
})

const mapDispatchToProps = (dispatch) => {
  return {
    nextRota: () => dispatch(nextRota()),
    prevRota: () => dispatch(prevRota()),
    atualizaRota: (array) => dispatch(atualizaRota(array))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    indicator: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#e1e1e1',
    },
    searchContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#FFA451',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      justifyContent: 'center', 
      flex: 3,
      width: '100%',
      marginTop: '3%'
    },
    storeText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 10
    },
    emptyList: {
      alignItems: 'center'
    },
    emptyListText: {
      fontSize: 16,
      color: '#FFA451',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '80%',
    },
    aisleAndArrows: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    aisle: {
      flex: 1,
    },
})

const aisleStyle = StyleSheet.create({

})