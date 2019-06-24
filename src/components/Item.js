import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { toggleSelected } from '../redux/actions/itemActions'
import { images } from '../images'

class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: images
    }
  }

  click() {
    this.props.toggleSelected(this.props.id)
  }

  render() {

    let id = this.props.imageId ? this.props.imageId : 0
    let image = this.state.images[id]

    let backgroundColor = 'white'
    let item = this.props.itens.find(obj => obj.id === this.props.id)
    if (item && item.selected) backgroundColor = '#FFC2D8'
    let boxStyle = StyleSheet.flatten([styles.box, { backgroundColor: backgroundColor }])

    return (
      <TouchableOpacity style={boxStyle} onPress={() => this.click()}  >
        <Image style={styles.image} resizeMode='center' source={image} />
        <Text style={{textAlign: 'center'}} >{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSelected: (id) => dispatch(toggleSelected(id))
  }
}

const mapStateToProps = (store) => ({
  itens: store.itemState.itens
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)

const styles = StyleSheet.create({
  box: {
    width: '45%',
    height: 100,
    borderRadius: 10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6
  },
  image: {
    height: 40,
    width: 40,
  }
})