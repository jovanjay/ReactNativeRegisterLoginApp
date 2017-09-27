/**
 * Presentational Component
 */
import React, {Component} from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

 //TODO - not sure if correct approach
  render() {
    return(
      <View>
        <TextInput
        title='Email'
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>
        <TextInput
        title='password'
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>
        <Button
          onPress={this.props.dispatch(login())}
        />
      </View>
    );
  }
}

export default Login;
