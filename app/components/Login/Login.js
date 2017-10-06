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
          title="Login"
          // onPress={(this.state) => this.props.login()}
        />
      </View>
    );
  }
}

export default Login;
