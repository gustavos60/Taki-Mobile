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
      width: 0,
      color: '',
      corredorVertical: true,
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
    let corredorVertical = true

    // Filtra apenas os corredores com o id passado
    corredor = this._filtraMapa()

    // Define os lados esquerdo e direito
    corredor.forEach((linha) => {
      if (linha.length <= 3) {
        // Adiciona prateleira vazia caso não haja nada em um dos lados do corredor
        if (linha.length === 2) {
          let elem = {
            tipo: 'prateleira',
            categoria: 'vazio',
            id: 0
          }
          if (linha[0].tipo === 'corredor') linha.splice(0, 0, elem)
          else linha.splice(2, 0, elem)
        }
        if (linha[0]) ladoEsquerdo.push(linha[0])
        if (linha[2]) ladoDireito.push(linha[2])
      } else {
        if (corredorVertical) {
          corredorVertical = false
          ladoEsquerdo = linha
        } else {
          ladoDireito = linha
        }
      }
    })

    // Retorna objeto com os cada item e o total de prateleiras que ele ocupa
    ladoEsquerdo = this._contaUnicos(ladoEsquerdo)
    ladoDireito = this._contaUnicos(ladoDireito)

    // Total de prateleiras de cada lado
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
      color: corredorColors[this.props.id % 4],
      corredorVertical
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
            let itemRedux = this.props.itens.find(obj => obj.id === item.id)
            let selected = false
            if (itemRedux) selected = itemRedux.selected
            let tag = <View></View>
            let borderWidth = (item.id === 0) ? 0 : 2
            let borderColor = (item.id === 0) ? "#FFF" : "#000"
            if (selected) {
              backgroundColor = '#FFA451'
              let indicadorColor = (itemRedux && itemRedux.confirmed) ? '#47B036' : '#909090'
              let indicadorHeight = (height > 40) ? 40 : height
              tag = (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.indicador, { backgroundColor: indicadorColor, height: indicadorHeight }]}
                  onPress={() => this.props.toggleConfirmation(item.id)} >
                  <Text style={{ textAlign: 'center', color: '#FFFFFF' }} numberOfLines={1} >{item.nome}</Text>
                </TouchableOpacity>
              )
            }
            if (esquerda) {
              return (
                <View style={[styles.lado, { height }]} >
                  {tag}
                  <View style={[styles.prateleira, { backgroundColor, borderWidth, borderColor }]} />
                </View>
              )
            } else {
              return (
                <View style={[styles.lado, { height }]} >
                  <View style={[styles.prateleira, { backgroundColor, borderWidth, borderColor }]} />
                  {tag}
                </View>
              )
            }
          }}
        />
      </View>
    )
  }

  _renderHorizontal = () => {
    let fracao = (this.state.width) / this.state.totalEsquerda
    return (
      <View style={{ height: 90, margin: 0, marginTop: 100 }} >
        <FlatList
          horizontal={true}
          data={this.state.ladoEsquerdo}
          extraData={[this.props.itens, this.state.width]}
          keyExtractor={(item, index) => '' + index}
          renderItem={({ item }) => {
            let width = item.total * fracao
            let height = 30
            let backgroundColor = '#FFF'
            let itemRedux = this.props.itens.find(obj => obj.id === item.id)
            let selected = false

            if (itemRedux) selected = itemRedux.selected
            
            let tag = <View style={{ height: 30 }} ></View>
            let borderWidth = (item.id === 0) ? 0 : 2
            let borderColor = (item.id === 0) ? "#FFF" : "#000"

            if (item.nome === 'Banheiro') {
              backgroundColor = '#afeeee' 
              let indicadorColor = '#47B036'
              let indicadorWidth = (width > 75) ? 75 : width

              tag = (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.indicador, { backgroundColor: indicadorColor, width: indicadorWidth, height: 30}]}>
                  <Text style={{ textAlign: 'center', color: '#FFFFFF' }} numberOfLines={1} >{item.nome}</Text>
                </TouchableOpacity>
              )
            }

            if (selected) {
              backgroundColor = '#FFA451'
              let indicadorColor = (itemRedux && itemRedux.confirmed) ? '#47B036' : '#909090'
              let indicadorWidth = (width > 75) ? 75 : width
              tag = (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.indicador, { backgroundColor: indicadorColor, width: indicadorWidth, height: 30}]}
                  onPress={() => { this.props.toggleConfirmation(item.id) }} >
                  <Text style={{ textAlign: 'center', color: '#FFFFFF' }} numberOfLines={1} >{item.nome}</Text>
                </TouchableOpacity>
              )
            }
            return (
              <View style={{ alignItems: 'center' }} >
                {tag}
                <View style={[styles.prateleira, { width, height, backgroundColor, borderWidth, borderColor }]} />
              </View>
            )
          }}
        />
      </View>
    )
  }

  _renderCorredor = () => {
    let fracaoDireita = this.state.height / this.state.totalDireita
    let fracaoEsquerda = this.state.height / this.state.totalEsquerda

    // Corredor vertical
    if (this.state.corredorVertical) {
      return (
        <View style={styles.horizontalDivider} onLayout={(event) => {
          let { width, height } = event.nativeEvent.layout
          this.setState({ width, height })
        }}>
          {this._renderLado('esquerdo', fracaoEsquerda)}
          <View style={styles.numeroVertical}>
            {this._renderNumeroCorredor()}
          </View>
          {this._renderLado('direito', fracaoDireita)}
        </View>
      )
    } 
    // Corredor Horizontal
    else {
      return (
        <View style={styles.verticalDivider} onLayout={(event) => {
          let { width, height } = event.nativeEvent.layout
          this.setState({ width, height })
        }}>
          {this._renderHorizontal()}
          <View style={styles.numeroHorizontal}>
            {this._renderNumeroCorredor()}
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        {this._renderCorredor()}
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
  horizontalDivider: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  verticalDivider: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numeroVertical: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numeroHorizontal: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
  },
  lado: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  indicador: {
    borderRadius: 20,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%'
  }
})