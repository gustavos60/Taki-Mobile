import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import Corredor from '../components/Corredor'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../components/SearchBar'
import Entrance from '../components/Entrance'
import MapAndRoute from '../components/MapAndRoute';


const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3

class AisleScreen extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right')
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left')
        } else {
          this.resetPosition()
        }
      }
    })

    this.state = {
      position,
      panResponder,
      corredores: [],
      actualAisle: null
    };
  }

  componentDidMount() {
    const corredor = this.props.navigation.getParam('corredor', 'NO-ID')
    this.setState({ actualAisle: corredor })

    let corredores = []
    let itens = this.props.itens
    
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
    corredores.sort()
    this.setState({ corredores: corredores })
  }

  resetPosition() {
    const { position } = this.state
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start()
  }

  forceSwipe(direction) {
    const x = (direction === 'right') ? SCREEN_WIDTH : -SCREEN_WIDTH
    const { position } = this.state
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 100
    }).start(() => this.handleSwipe(direction))
  }

  handleSwipe(direction) {
    let { actualAisle, corredores } = this.state
    let arraySize = corredores.length
    let corredorIndex = corredores.findIndex(obj => obj === actualAisle)
    const { position } = this.state
    if (direction === 'left' && corredorIndex > 0) {
      this.setState({ actualAisle: corredores[corredorIndex - 1] })
      position.setValue({ x: SCREEN_WIDTH, y: 0 })
      Animated.spring(position, {
        toValue: { x: 0, y: 0 }
      }).start()
    } else if (direction === 'right' && arraySize > 1 && corredorIndex < arraySize - 1) {
      this.setState({ actualAisle: corredores[corredorIndex + 1] })
      position.setValue({ x: -SCREEN_WIDTH, y: 0 })
      Animated.spring(position, {
        toValue: { x: 0, y: 0 }
      }).start()
    } else {
      this.resetPosition()
    }
  }

  _renderLeftArrow = () => {
    let { corredores, actualAisle } = this.state
    let corredorIndex = corredores.findIndex(obj => obj === actualAisle)
    if (corredorIndex < corredores.length - 1) {
      return (
        <View>
          <TouchableOpacity onPress={() => this.forceSwipe('left')}>
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

  _renderRightArrow = () => {
    let { corredores, actualAisle } = this.state
    // let arraySize = corredores.length
    let corredorIndex = corredores.findIndex(obj => obj === actualAisle)
    if (corredorIndex !== 0) {
      return (
        <View>
          <TouchableOpacity onPress={() => this.forceSwipe('right')}>
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

  _renderAisle = () => {
    return (
      <View style={styles.aisleAndArrows}>
        {this._renderLeftArrow()}
        <Animated.View
          style={[styles.aisle, this.state.position.getLayout()]}
          {...this.state.panResponder.panHandlers}
        >
          <Corredor id={this.state.actualAisle} />
        </Animated.View>
        {this._renderRightArrow()}
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer} >
          <SearchBar placeholder='Busque um produto...' />
          <MapAndRoute
            store='Arco Mix'
            subtitle={'Corredor ' + this.state.actualAisle}
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
    )
  }
}

const mapStateToProps = (store) => ({
  total: store.itemState.totalSelected,
  itens: store.itemState.itens
})

export default connect(mapStateToProps, null)(AisleScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: '100%'
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