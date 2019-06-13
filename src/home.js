import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

class Home extends Component {
    render () {
        return (
            <View>
                <Text>This is the home page.</Text>
            </View>
        )
    }
}

export default Home;

AppRegistry.registerComponent('realestate', () => Home);