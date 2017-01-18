'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

var LoginPage = require('./LoginPage');
var MainPage = require('./MainPage');
var AddShoppingListPage = require('./AddShoppingListPage');
var NoNavigatorPage = require('./NoNavigatorPage');

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'LoginPage', name: 'Index', userId: 0}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator}
          userId = {route.userId} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator}
            userId = {route.userId}/>
      );
    }
    if (routeId === 'AddShoppingListPage') {
      return (
        <AddShoppingListPage
          navigator={navigator}
          userId = {route.userId} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator}
            userId = {route.userId} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{fontWeight: 'bold'}}>Go to index</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('ShoppingListApp', () => App);