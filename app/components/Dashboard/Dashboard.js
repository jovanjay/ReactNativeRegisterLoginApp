/**
 * Presentational Component
 */
import React, {Component} from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  View,
} from 'react-native';

import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is a test content',
      access: ''
    };
  }

  render() {
    return(
      <View>
        <Text>
        Welcome {this.state.userInfo.name}
        </Text>
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
