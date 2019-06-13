import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
    blue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 50,
        backgroundColor: 'steelblue',
        flex: 1
    },
    red: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: 'red',
        flex: 2,
    },
    reg: {
        fontSize: 35,
        flex: 2,
        backgroundColor: 'yellow',
    }
})

class Greeting extends Component {
    render () {
        return (
            <View stye={{alignItems: 'center'}}>
                <Text style={this.props.style}>Hello, {this.props.name}!</Text>
            </View>
        )
    }
}

class MultipleGreetings extends Component {
    render () {
        return (
            <View style={{alignItems: 'center', flex: 1}}>
                <Greeting style={style.red} name="Chris"/>
                <Greeting style={style.blue} name="Quan"/>
                <Greeting style={style.reg} name="Vivian"/>
            </View>
        )
    }
}

export default MultipleGreetings;

AppRegistry.registerComponent('realestate', () => MultipleGreetings);