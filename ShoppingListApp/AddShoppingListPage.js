'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Navigator,
  ToastAndroid,
  Alert,
  TouchableOpacity
} from 'react-native';

class AddShoppingListPage extends Component {
  constructor(props) {
    super(props);
    console.log('Add shopping list');
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  add(){
    var name = this.state.name;
    console.log(name);


    if (this.state.name == '' || this.state.phone == '' || this.state.address == '') {
      Alert.alert(
          'Empty name!',
          'Please give a name!',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
      )
    }
    else{
      var url = 'http://adrianpupaza.000webhostapp.com/addShoppingListGet.php?name=' + this.state.name + '&userId=' + this.props.userId;

        var result = fetch(url).then((response) => {
            response.json()
                .then(data => ({
                        data: data,
                        status:response.status
                    })
                ).then(res => {
                  console.log(res);
                console.log(res.status, res.data.message)
                if (res.status == 200){
                    Alert.alert("Add", "Shopping list added", [
                        {text: 'OK', onPress: () => console.log(res.data)},
                    ]);
                }
                else{
                    Alert.alert("Login", "Authentication failed");
                }
            });
        })
    }



  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput placeholder='Name'
                   style={{width:200, textAlign: 'center'}}
                   onChangeText={(text) => this.setState({...this.state, name: text})}/>
        <Button
            title="Add"
            onPress={this.add.bind(this)}
            color="#2E64FE"
        />
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'NoNavigatorPage',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10}}>
          Go back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return null;
  },
  Title(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Add shopping list
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = AddShoppingListPage;
