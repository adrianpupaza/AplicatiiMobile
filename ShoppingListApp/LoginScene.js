/**
 * Created by Adrian on 1/8/2017.
 */
/**
 * Created by Adrian on 1/8/2017.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class LoginScene extends Component {
    render(){
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableHighlight style={this.props.styles.fullWidthButton} onPress={this.props.onForward}>
                    <Text style={this.props.styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

LoginScene.propTypes = {
    onForward: PropTypes.func.isRequired,
};