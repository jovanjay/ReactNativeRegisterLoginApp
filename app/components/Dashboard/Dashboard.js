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
      message: 'User',
      access: ''
    };
  }

  render() {
    return(
      <View>
        <Text>
        Welcome {this.state.message}
        </Text>
        <Text>
          {this.state.access}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
