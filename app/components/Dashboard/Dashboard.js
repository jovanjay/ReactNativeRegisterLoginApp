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

  componentDidMount(){
    this.props.load();
  }

  constructor(props) {
    super(props);
    this.state = {
      message: 'This is a test content',
      access: ''
    };
  }

  render() {
    // console.log(this.props);
    return(
      <View>
        <Text>
        Welcome {this.state.name}
        </Text>
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
