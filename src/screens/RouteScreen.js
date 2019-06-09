import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import MapAndRoute from '../components/MapAndRoute';

class RouteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
    
      render() {
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
              
            </View>
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
  total: store.itemState.totalSelected
})

export default connect(mapStateToProps, null)(RouteScreen)

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
      flex: 3,
      margin: 10,
      width: '90%'
    },
    storeText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 10
    },
})

const aisleStyle = StyleSheet.create({

})