/**
 * Created by Adrian on 1/8/2017.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class WelcomeScene extends Component {
    render(){
        function navigateForward(sceneTypeProp, nextIndex, navigator){
            navigator.push({
                passProps: {
                    sceneType: sceneTypeProp,
                    index: nextIndex
                }, // Matches route.passProps
            })
        }
        return(

            <View style={this.props.styles.container}>
                <Text style={this.props.styles.welcome}>
                    Welcome to the Shopping List App!
                </Text>
                <Text style={this.props.styles.instructions}>
                    To get started, tap below to go to login.
                </Text>
                <TouchableHighlight style={this.props.styles.fullWidthButton} onPress={navigateForward("login", this.props.index, this.props.navigator)}>
                    <Text style={this.props.styles.buttonText}>To login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

