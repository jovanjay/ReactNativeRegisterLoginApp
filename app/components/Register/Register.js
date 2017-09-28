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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 0,
      email: '',
      password: '',
    };
  }

 //TODO - not sure if correct approach
  render() {
    return(
      <View>
        <TextInput
        title='Name'
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput
        title='Email'
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>

        <TextInput
        title='password'
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <Button
          onPress={ this.props.login(this.state) }
        />
      </View>
    );
  }
}

export default Register;
