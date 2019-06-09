import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Corredor from '../components/Corredor'
import SearchBar from '../components/SearchBar'
import Entrance from '../components/Entrance'
import MapAndRoute from '../components/MapAndRoute';


class AisleScreen extends Component {
    render() {
        const corredor = this.props.navigation.getParam('corredor', 'NO-ID')
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer} >
                    <SearchBar placeholder='Busque um produto...' />
                    <MapAndRoute 
                        store='Arco Mix'
                        subtitle= {'Corredor ' + corredor}
                        onMapPress={() => this.props.navigation.navigate('Map')}
                        onRoutePress={() => this.props.navigation.navigate('Route')}
                    />
                </View>
                <View style={styles.image}>
                    <Corredor id={corredor}/>
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
        width: '90%'
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
      }
})