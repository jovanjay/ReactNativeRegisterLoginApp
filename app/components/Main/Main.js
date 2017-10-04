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
import { NavigationActions } from 'react-navigation';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return(
      <View>
        <Text>
        Welcome {this.state.message}
        </Text>
        <Button
          title='Login'
          onPress={this.props.LoginScreen()}
        />
        <Button
          title='Register'
        />
      </View>
    );
  }
}

export default Main;
