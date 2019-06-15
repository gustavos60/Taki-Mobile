import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { mapa } from '../mapa'
import { connect } from 'react-redux'
import { corredorColors } from '../colors'

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

  render() {

    let fracaoDireita = this.state.height / this.state.totalDireita
    let fracaoEsquerda = this.state.height / this.state.totalEsquerda
    return (
      <View style={styles.divider} onLayout={(event) => {
        let { height } = event.nativeEvent.layout
        this.setState({ height })
      }}>
        <View style={styles.esquerda}>
          <FlatList
            data={this.state.ladoEsquerdo}
            keyExtractor={(item, index) => '' + index}
            style={{ flex: 1 }}
            renderItem={(item) => {
              let height = item.item.total * fracaoEsquerda
              let backgroundColor = '#FFFFFF'
              let selected = this.props.itens[item.item.id].selected
              let nome = ''
              let tag = <View></View>
              if (selected) {
                backgroundColor = '#FFA451'
                nome = item.item.nome
                tag = <Text style={styles.indicador} numberOfLines={2} >{nome}</Text>
              }
              return (
                <View style={[styles.lado, { height }]} >
                  {tag}
                  <View style={[styles.prateleira, { backgroundColor }]} />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.meio}>
          {this._renderNumeroCorredor()}
        </View>
        <View style={styles.direita}>
          <FlatList
            data={this.state.ladoDireito}
            keyExtractor={(item, index) => '' + index}
            style={{ flex: 1 }}
            renderItem={(item) => {
              let height = item.item.total * fracaoDireita
              let backgroundColor = '#FFFFFF'
              let selected = this.props.itens[item.item.id].selected
              let nome = ''
              let tag = <View></View>
              if (selected) {
                backgroundColor = '#FFA451'
                nome = item.item.nome
                tag = <Text style={styles.indicador} numberOfLines={2} >{nome}</Text>
              }
              return (
                <View style={[styles.lado, { height }]} >
                  <View style={[styles.prateleira, { backgroundColor }]} />
                  {tag}
                </View>
              )
            }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens
})

export default connect(mapStateToProps, null)(Corredor)

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
    flex: 1,
    backgroundColor: '#47B036',
    borderRadius: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: '2%',
    marginRight: '2%'
  }
})