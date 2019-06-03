import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MapAndRoute extends Component {
    render() {

        let subtitle = (this.props.subtitle) ? this.props.subtitle : null
        let store = (this.props.store)
        let onMapPress = (this.props.onMapPress) ? this.props.onMapPress : {}
        let onRoutePress = (this.props.onRoutePress) ? this.props.onRoutePress : {}

        return (
            <View style={styles.mapAndRoute}>
                <TouchableOpacity 
                  style={styles.roundButton}
                  onPress={onMapPress}
                  activeOpacity={0.7}
                > 
                <Icon
                    name='map-legend'
                    size={24}
                    color='white'
                    style={styles.icon}
                />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.storeText}>{store}</Text>
                    <Text style={styles.subtitle}> {subtitle}</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.roundButton}
                  onPress={onRoutePress}
                  activeOpacity={0.7}
                > 
                <Image 
                    source={require('../../assets/icons/curved-arrow.png')}
                    tintColor='white'
                    resizeMode='contain'
                    style={{width:22, height:22}}
                />
                </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  mapAndRoute: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },
  storeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  roundButton: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7802F',
    padding: 8,
  },
  titleContainer: {
      alignItems: 'center',
      height: '100%',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  }
})