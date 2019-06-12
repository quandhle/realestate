import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Header} from 'react-native';
import TopHeader from './components/header';

class Greeting extends Component {
    render () {
        return (
            <Text>Hello, {this.props.name}!</Text>
        )
    }
}

export default function App() {
    return (
        <View>
            {/* <TopHeader/> */}
            <View style={styles.container}>
                <Greeting name="Vivian"/>
                <Greeting name="Wes"/>
                <Greeting name="Chris"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
