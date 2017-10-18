/**
 * Login Component
 */
import React, {Component} from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import styles from '../../AppStyles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return(
      <View style={styles._container}>
        <TextInput
        style={styles._textInput}
        title='Email'
        placeholder='Email'
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>

        <TextInput
        style={styles._textInput}
        title='password'
        placeholder='Password'
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <View style={styles._buttonContainer}>
          <Button
            color='#ffffff'
            title='Login'
            onPress={() => this.props.loginAttempt(this.state.email,this.state.password)}
          />
        </View>
      </View>
    );
  }
}

export default Login;
