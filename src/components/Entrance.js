import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Entrance extends Component {
    render() {
        return (
        <View style={styles.entrance}>
            <View style={styles.miniLine}/>
            <View style={styles.iconView}>
                <Icon 
                    name='arrow-up'
                    color='green'
                    size={20}
                />
                <Text style={styles.entranceText}> Entrada </Text>
            </View>
            <View style={styles.bigLine}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    entrance: {
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end'
    },
    entranceText: {
        fontSize: 20,
        color: 'green',
    },
    miniLine: {
        height: 1,
        width: '2%',
        marginTop: '6%',
        backgroundColor: '#d1d1d1'
    },
    bigLine: {
        height: 1,
        marginTop: '6%',
        width: '75%',
        backgroundColor: '#d1d1d1'
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
