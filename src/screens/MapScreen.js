import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'
import { connect } from 'react-redux'
import { atualizaRota } from '../redux/actions/rotaActions'
import { resetBooleans } from '../redux/actions/itemActions'
import { mapa } from '../mapa'
import Entrance from '../components/Entrance'
import MapAndRoute from '../components/MapAndRoute'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Overlay } from 'react-native-elements'


class MapScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      corredores: [],
      visible: false
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
    this.props.atualizaRota(corredores.filter(item => item > 0).sort())
    this.setState({ corredores })
  }

  componentWillUnmount() {
    this.setState({ visible: false })
  }

  _renderMap = () => {
    return (
      <Map
        corredores={this.state.corredores}
        atualizaCorredor={(id) => this.props.navigation.navigate('Aisle', {
          corredor: id
        })} />
    )
  }

  _buttonText = () => {
    return (
      <View style={styles.welcome} >
        <Text style={{ color: '#FFA451', fontWeight: 'bold', fontSize: 16 }} >Bem-vindo ao Arco Mix!</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }} >Os itens de sua lista estão nos corredores destacados. Toque no corredor para uma visão mais detalhada.</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um produto...' />
          <MapAndRoute
            store='Arco Mix'
            subtitle='Mapa Principal'
            onMapPress={() => { this.props.navigation.navigate('Map') }}
            onRoutePress={() => { this.props.navigation.navigate('Route') }}
          />
        </View>
        <View style={styles.container} >
          {this._buttonText()}
        </View>
        <View style={styles.image}>
          {this._renderMap()}
        </View>
        <View>
          <TouchableOpacity
            style={styles.finishButton}
            activeOpacity={0.7}
            onPress={() => {
              this.setState({ visible: true })
              setTimeout(() => {
                this.props.navigation.navigate('Home')
                this.props.resetBooleans()
              }, 2000)
            }}
          >
            <Icon
              name='check'
              size={20}
              style={{ color: 'white', marginLeft: 10, marginRight: 10 }}
            />
            <Text style={{ color: 'white', fontWeight: 'bold' }} >Finalizar compras</Text>
          </TouchableOpacity>
          <Entrance />
        </View>
        <TouchableOpacity
          style={styles.indicator}
          onPress={() => this.props.navigation.push('List')}
          activeOpacity={0.7}
        >
          <Text style={{ textAlign: 'center' }} >{this.props.total} itens selecionados. </Text>
        </TouchableOpacity>
        <Overlay
          width='auto'
          height='auto'
          isVisible={this.state.visible}
          overlayBackgroundColor='transparent'
          overlayStyle={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10}}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <View style={{ marginTop: 20 ,width: 80, height: 80, borderRadius: 40, backgroundColor: '#47B036', alignItems: 'center', justifyContent: 'center'}} >
                <Icon
                  name='thumb-up'
                  size={60}
                  color='white' />
              </View>
            </View>
            <View style={{width: 150, height: 75, alignItems: 'center', justifyContent: 'center'}} >
              <Text style={{textAlign: 'center', fontWeight: 'bold'}} >Obrigado por usar o taki!</Text>
            </View>
          </View>
        </Overlay>
      </View>
    )
  }
}
const mapStateToProps = (store) => ({
  total: store.itemState.totalSelected,
  itens: store.itemState.itens,
  rotaArray: store.rotaState.rotaArray
})

const mapDispatchToProps = (dispatch) => {
  return {
    atualizaRota: (array) => dispatch(atualizaRota(array)),
    resetBooleans: () => dispatch(resetBooleans())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 5,
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
  rota: {
    backgroundColor: '#47B036',
    borderRadius: 10,
    width: 200,
    height: 50,
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
  },
  welcome: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finishButton: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 175,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#47B036',
    position: 'absolute',
    alignSelf: 'center',
    top: '1%',
    elevation: 2,
  },
})
