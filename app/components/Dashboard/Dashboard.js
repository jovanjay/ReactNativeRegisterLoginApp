/**
 * Presentational Component
 */
import React, {Component} from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'User'
    };
  }

  render() {
    return(
      <View>
        <Text>
        Welcome {this.state.message}
        </Text>
        <Button
          title='Logout'
        />
      </View>
    );
  }
}

export default Dashboard;
