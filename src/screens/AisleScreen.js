import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Corredor from '../components/Corredor'

export default class Aisle extends Component {
    constructor(props) {
        super(props)
        this.state = {
          corredor: 0,
        }
      }

    render(){
        const {navigation} = this.props;
        const corredor = navigation.getParam('corredor', 'NO-ID');

        return(
            <View style={style.container}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={style.rota}
                    onPress={() => {
                        this.setState({ corredor: 0 })
                        this.props.navigation.navigate('Map')
                    }
                }>
                    <Text style={style.routeText}>Retornar ao mapa</Text>
                </TouchableOpacity>
                <Corredor id={corredor}/>
            </View>    
        )
    }
        
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rota: {
        backgroundColor: '#47B036',
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
})