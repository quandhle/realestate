import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Climbing extends Component {
    state = {
        isShowing: true
    }

    componentDidMount () {
        setInterval(() => (
            this.setState(prev => (
                {isShowing: !prev.isShowing}
            ))
        ), 1000);
    }

    render () {
        let picture = {
            uri: 'https://media.self.com/photos/5c755d2eb43cf177fa569d38/4:3/w_728,c_limit/FreeSolo_07.jpg'
        };

        if (this.state.isShowing) {
            return (
                <Image source={picture} style={{width: 193, height: 193}}/>
            )
        } else {
            return null
        }
    }
}

export default Climbing;

AppRegistry.registerComponent('realestate', () => Climbing);