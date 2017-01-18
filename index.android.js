/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Navigator,
    StyleSheet
} from 'react-native';
import MyScene from './MyScene';
import WelcomeScene from './WelcomeScene'

export default class ShoppingListApp extends Component {
    render() {
        function renderScene(route, navigator) {
            if (route.passProps.sceneType === "welcome") {
                return <WelcomeScene styles={styles} navigator={navigator} {...route.passProps}/>
            }
            else {
                <BasicComponent hello="Hello world!"/>
            }
        }
        return (
            //     <MyScene
            //         title={route.passProps.title}
            //         sceneType={route.passProps.sceneType}
            //         // Function to call when a new scene should be displayed
            //         onForward={(sceneTypeProp, titleProp) => {
            //           const nextIndex = route.index + 1;
            //           navigator.push({
            //             index: nextIndex,
            //             passProps:{
            //                 sceneType: sceneTypeProp,
            //                 title: titleProp,
            //             },
            //           });
            //         }}
            //         // Function to call to go back to the previous scene
            //         onBack={() => {
            //           if (route.index > 0) {
            //             navigator.pop();
            //           }
            //         }}
            //         }
            // />
            <Navigator
                style={{flex:1}}
                initialRoute={{ passProps: { sceneType:"welcome" , index:0}}}
                renderScene={renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    fullWidthButton: {
        backgroundColor: 'deepskyblue',
        height:40,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'azure'
    }
});

class BasicComponent extends Component {
    render() {
        function sayHello(){
            return <View>
                {/*<Text>{this.props.hello}</Text>*/}
                <Text>Hello</Text>
                </View>
        }
        return (
        sayHello()
        );
    }
}

AppRegistry.registerComponent('ShoppingListApp', () => BasicComponent);
