import React, { Component } from 'react';
import Axios from 'axios'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

var $http = Axios.create({
  baseURL: 'http://dev.domain.com',
  timeout: 5000,
  auth: {
    username: 'admin',
    password: 'password'
  }
});

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : '',
      password : '',
      type : 0
    };
  }

  /* Login to L5 via API Passport */
  _login() {
    $http.post('/m/register', {
      'name' : this.state.name,
      'email' : this.state.email,
      'password' : this.state.password,
      'type' : 0
    })
    .then(response => {
      try {
        AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
        AsyncStorage.setItem('expires_in', JSON.stringify(response.data.expires_in));
        AsyncStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
        AsyncStorage.setItem('token_type', JSON.stringify(response.data.token_type));

        //TODO - route to the main page or send success message to main app

      } catch (error) {
        // Error saving data
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'stretch',
          marginRight:30,
          marginLeft:30
        }}>

          <TextInput
            style={styles.textInputField}
            placeholder="Name"
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />

          <TextInput
            style={styles.textInputField}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />

          <TextInput
            secureTextEntry={true}
            style={styles.textInputField}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />

          <Button
            onPress={this._login.bind(this)}
            title="Login"
          />

        </View>
      </View>
    );
  }
}

/**
 * The Main Page - route here after logged in
 */
class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputField : {
      marginTop: 30,
      height: 40,
      borderColor: '#cccccc',
      borderWidth: 1,
      alignSelf: 'stretch',
      borderRadius: 4,
      padding: 5
    }
});

/**
 * Main App
 */
export default class LoginApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      access_token: AsyncStorage.getItem('access_token'),
      refresh_token: AsyncStorage.getItem('refresh_token')
    };
  }

  render() {
    if(typeof inf_data == 'undefined') {
      return(<LoginPage/>);
    } else {
      return(<MainPage/>);
    }
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LoginApp);
