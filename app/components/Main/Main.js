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

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import styles from '../../AppStyles';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return(
      <View style={styles._container}>
        <LoginButton/>
        <RegisterButton/>
      </View>
    );
  }
}

export default Main;
