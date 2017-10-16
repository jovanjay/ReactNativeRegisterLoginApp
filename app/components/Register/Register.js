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
import styles from '../../AppStyles';

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
        style={styles._textInput}
        title='Name'
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput
        style={styles._textInput}
        title='Email'
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>

        <TextInput
        style={styles._textInput}
        title='password'
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <Button
        title="Register"
        onPress={() => 
            this.props.registerAttempt(this.state)}
        />
      </View>
    );
  }
}

export default Register;
