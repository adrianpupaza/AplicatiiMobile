'use strict';
import React, {Component} from 'react';
import {
  View,
  Text,
    TouchableHighlight,
} from 'react-native';

class SplashPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'LoginPage',
            });
        }, 1000);
    }
    render() {
    // var navigator = this.prop.navigator;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32}}>Welcome to the Shopping List App!</Text>
                {/*<TouchableHighlight onPress={this.props.navigator.replace({id:"LoginPage"})}>*/}
                    {/*<Text>Go to login</Text>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }
}

module.exports = SplashPage;
