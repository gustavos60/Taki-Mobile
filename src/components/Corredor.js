import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'
import { mapa } from '../mapa'
import { connect } from 'react-redux'
import { corredorColors } from '../colors'
import { toggleConfirmation } from '../redux/actions/itemActions'

class Corredor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ladoEsquerdo: [],
      ladoDireito: [],
      totalEsquerda: 0,
      totalDireita: 0,
      corredor: [],
      height: 0,
      color: ''
    }
  }

  _contaUnicos = (lado) => {
    let unicos = []
    lado.forEach((item) => {
      let added = false
      unicos.forEach((unico) => {
        if (unico.nome === item.categoria) {
          unico.total += 1
          added = true
        }
      })
      if (!added) unicos.push({ nome: item.categoria, id: item.id, total: 1 })
    })
    return unicos
  }

  _filtraMapa = () => {
    let { id } = this.props
    let corredor = []
    mapa.forEach((linha) => {
      let filtrado = linha.filter((obj) => {
        let { tipo } = obj
        return (tipo === 'corredor' && obj.id === id) || (tipo === 'prateleira' && obj.idcorredor === id)
      })
      if (filtrado.length > 0) corredor.push(filtrado)
    })
    return corredor
  }

  atualizaCorredor = () => {
    let corredor = []
    let ladoDireito = []
    let ladoEsquerdo = []

    corredor = this._filtraMapa()

    corredor.forEach((linha) => {
      if (linha[0]) ladoEsquerdo.push(linha[0])
      if (linha[2]) ladoDireito.push(linha[2])
    })
    ladoEsquerdo = this._contaUnicos(ladoEsquerdo)
    ladoDireito = this._contaUnicos(ladoDireito)

    let totalEsquerda = 0
    let totalDireita = 0
    ladoEsquerdo.forEach((item) => {
      totalEsquerda += item.total
    })
    ladoDireito.forEach((item) => {
      totalDireita += item.total
    })

    this.setState({
      corredor,
      ladoDireito,
      ladoEsquerdo,
      totalEsquerda,
      totalDireita,
      color: corredorColors[this.props.id % 4]
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) this.atualizaCorredor()
  }

  componentDidMount() {
    this.atualizaCorredor()
  }

  _renderNumeroCorredor = () => {
    let color = corredorColors[this.props.id % 4]

    return <Text style={{ color, fontSize: 30, fontWeight: 'bold' }} >{this.props.id}</Text>
  }

  _renderLado = (lado, fracao) => {
    const esquerda = (lado === 'esquerdo')
    const style = esquerda ? styles.esquerda : styles.direita
    const data = esquerda ? this.state.ladoEsquerdo : this.state.ladoDireito
    return (
      <View style={style}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => '' + index}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            let height = item.total * fracao
            let backgroundColor = '#FFFFFF'
            let selected = this.props.itens[item.id].selected
            let nome = ''
            let tag = <View></View>
            if (selected) {
              backgroundColor = '#FFA451'
              let indicadorColor = (this.props.itens[item.id].confirmed) ? '#47B036' : '#909090'
              nome = item.nome
              tag = (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.indicador, { backgroundColor: indicadorColor }]}
                  onPress={() => this.props.toggleConfirmation(item.id)} >
                  <Text style={{ textAlign: 'center', color: '#FFFFFF' }} numberOfLines={2} >{nome}</Text>
                </TouchableOpacity>
              )
            }
            if (esquerda) {
              return (
                <View style={[styles.lado, { height }]} >
                  {tag}
                  <View style={[styles.prateleira, { backgroundColor }]} />
                </View>
              )
            } else {
              return (
                <View style={[styles.lado, { height }]} >
                  <View style={[styles.prateleira, { backgroundColor }]} />
                  {tag}
                </View>
              )
            }
          }}
        />
      </View>
    )
  }

  render() {
    let fracaoDireita = this.state.height / this.state.totalDireita
    let fracaoEsquerda = this.state.height / this.state.totalEsquerda
    return (
      <View style={styles.divider} onLayout={(event) => {
        let { height } = event.nativeEvent.layout
        this.setState({ height })
      }}>
        {this._renderLado('esquerdo', fracaoEsquerda)}
        <View style={styles.meio}>
          {this._renderNumeroCorredor()}
        </View>
        {this._renderLado('direito', fracaoDireita)}
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleConfirmation: (id) => dispatch(toggleConfirmation(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Corredor)

const styles = StyleSheet.create({
  divider: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  meio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  esquerda: {
    flex: 3,
  },
  direita: {
    flex: 3,
  },
  prateleira: {
    width: '20%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#000000'
  },
  lado: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  indicador: {
    borderRadius: 20,
    height: 40,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%'
  }
})