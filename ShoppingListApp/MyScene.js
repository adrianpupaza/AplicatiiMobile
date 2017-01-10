/**
 * Created by Adrian on 1/8/2017.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import WelcomeScene from "./WelcomeScene";
import LoginScene from "./LoginScene";

export default class MyScene extends Component {
    render() {
        function getSceneType(sceneType, title, onForward, onBack){
            if (sceneType === "welcome") {
                return <WelcomeScene styles={styles} onForward={onForward}/>
            }
            // else if (sceneType === "login"){
            //     return <LoginScene styles={styles} />
            // }
            else {
                return <View>
                    <Text>Current Scene: {title}</Text>

                    <TouchableHighlight onPress={onForward}>
                        <Text>Tap me to load the next scene</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={onBack}>
                        <Text>Tap me to go back</Text>
                    </TouchableHighlight>
                </View>
            }
        }
        return (
            getSceneType(this.props.sceneType, this.props.title, this.props.onForward, this.props.onBack)
        )
    }
}

MyScene.propTypes = {
    sceneType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};

