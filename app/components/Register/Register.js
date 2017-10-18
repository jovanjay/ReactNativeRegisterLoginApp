/**
 * Presentational Component
 */
import React, {Component} from 'react';
import Immutable from 'immutable';
import {
  TextInput,
  Button,
  TouchableOpacity,
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
      <View style={styles._container}>
        <TextInput
        style={styles._textInput}
        title='Name'
        placeholder = 'Name'
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>

        <TextInput
        style={styles._textInput}
        title='Email'
        placeholder = 'Email'
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>

        <TextInput
        style={styles._textInput}
        title='password'
        placeholder = 'Password'
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>

        <View style={styles._buttonContainer}>
          <Button
            color='#ffffff'
            title='Register'
            style={styles._buttonTs}
            onPress={() => this.props.registerAttempt(this.state)} />
        </View>
      </View>
    );
  }
}

export default Register;
