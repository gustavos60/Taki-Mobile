import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Corredor from '../components/Corredor';

const data = [
    <Corredor />,
    <Corredor />,
    <Corredor />,
    <Corredor />
];

export default class RouteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: data
        };
      }
    
      render() {
        return (
        <View style={style.container}>
            <Text>aqui</Text>
        </View>
          
        );
      }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%' 
    },
})