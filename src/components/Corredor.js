import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { mapa } from '../mapa'

export default class Corredor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ladoEsquerdo: [],
      ladoDireito: [],
      totalEsquerda: 0,
      totalDireita: 0,
      corredor: [],
      height: 0
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
      if (!added) unicos.push({ nome: item.categoria, total: 1 })
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

  componentDidMount() {
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
      totalDireita
    })
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
            style={{ flex: 1, backgroundColor: '#0000FF' }}
            renderItem={(item) => {
              let height = item.item.total * fracaoEsquerda
              return (
                <View style={[styles.lado, { height }]} >
                  <Text>{item.item.nome} </Text>
                  <View style={styles.prateleira} />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.meio}>

        </View>
        <View style={styles.direita}>
        <FlatList
            data={this.state.ladoDireito}
            keyExtractor={(item, index) => '' + index}
            style={{ flex: 1, backgroundColor: '#0000FF' }}
            renderItem={(item) => {
              let height = item.item.total * fracaoDireita
              return (
                <View style={[styles.lado, { height }]} >
                  <View style={styles.prateleira} />
                  <Text>{item.item.nome} </Text>
                </View>
              )
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  divider: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  meio: {
    flex: 1
  },
  esquerda: {
    flex: 2,
    backgroundColor: '#AA1188'
  },
  direita: {
    flex: 2,
    backgroundColor: '#1166FF'
  },
  prateleira: {
    width: 30,
    backgroundColor: '#E0E0E0',
    height: '100%',
    borderWidth: 2,
    borderColor: '#000000'
  },
  lado: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})