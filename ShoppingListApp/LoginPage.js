'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
  BackAndroid,
  Alert
} from 'react-native';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        // console.log('EmployeeManager - constructor');
        this.state = {
            username: '',
            password: '',
            logged: false
        }

        this.NavigationBarRouteMapper = {
            LeftButton(route, navigator, index, navState) {
                return null;
            },
            RightButton(route, navigator, index, navState) {
                return null;
            },
            Title(route, navigator, index, navState) {
                return (
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                                      onPress={() =>{
                                      console.log(navigator.getCurrentRoutes().id);
                                      if (navigator.getCurrentRoutes().length === 1  ) {
                                        navigator.pop();
                                       }
                                      }
                                      }>
                        <Text style={{color: 'white', margin: 1, fontSize: 16}}>
                            Shopping List App
                        </Text>
                    </TouchableOpacity>
                );
            }
        }
    }

  render() {
      // console.log('LoginPage - render');

    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={this.NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 90}}>

          {/*<Image source={require('./img/employees.png')} style={{width: 193, height: 130, marginTop: 10}}/>*/}

          <TextInput placeholder='Enter username...'
                     style={{width:200, textAlign: 'center'}}
                     onChangeText={(text) => this.setState({...this.state, username: text})}/>

          <TextInput placeholder='Enter password...'
                     style={{width:200, textAlign: 'center'}}
                     secureTextEntry={true}
                     onChangeText={(text) => this.setState({...this.state, password: text})}/>

          <Button
              onPress={this.TryLogin.bind(this)}
              title="Login"
              color="#2E64FE"
              accessibilityLabel="Login into the application"
          />
          <Text></Text>
          <Button
              onPress={BackAndroid.exitApp}
              title="Exit"
              color="#2E64FE"
              accessibilityLabel="Exit"
          />
      </View>
    );
  }
  TryLogin(){
	  console.log("Try Login - render");
	  console.log(this.state.username);
	  console.log(this.state.password);
	//  var response = this.GetMovies();
	 // console.log(response);
      this.GetLogin();
	  
  }

    GetMovies() {
    return fetch('https://server-url.com/fetch.php')
      .then((response) => response.json())
	  .then((json) => {
		console.log(json)
		})
      .catch((error) => {
        console.error(error);
      });
	}
	  
	GetLogin() {
        console.log("Login pressed");
        if (this.state.username == '' || this.state.password == '') {
            Alert.alert(
                'Empty field(s)!',
                'Please fill username and password!',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
        else{
            var url = 'http://adrianpupaza.000webhostapp.com/loginGet.php?username=' + this.state.username + '&password=' + this.state.password;
            fetch(url,
                {
                    // body: JSON.stringify({
                    //     username: this.state.username,
                    //     password: this.state.password
                    // })
                })
                .then((response) => {
                    response.json()
                        .then(data => ({
                                data: data,
                                status:response.status
                            })
                        ).then(res => {
                        console.log(res.status, res.data.message)
                        if (res.status == 200 && res.data.message == 'success'){
                            Alert.alert("Login", "Authentication successful", [
                                {text: 'OK', onPress: () => this.gotoNext(res.data.user.id)},
                            ]);
                        }
                        else{
                            Alert.alert("Login", "Authentication failed");
                        }
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }


  exit(){
      Alert.alert(
          'Exit?',
          'Are you sure?',
          [
              {text: 'Yes', onPress: () => {
                                            console.log('Exit Pressed');
                                            this.state.username = '';
                                            this.state.password = '';
                                            this.state.logged = false;
                                            BackAndroid.exitApp();
                                          }
              },
              {text: 'No', onPress: this.gotoNext.bind(this)}
          ]
      )
  }
  gotoNext(userId){
      console.log("to main page with userId: " + userId);
      this.props.navigator.push({
          id: 'MainPage',
          name: 'Main Page',
          userId: userId
      });
  }

}

module.exports = LoginPage;
