/**
 * Presentational Component
 */
import Immutable from 'immutable';
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

  //TESTING
  componentWillMount() {
    this.props.getData();
  }

  constructor(props) {
    super(props);
    this.state = {
      message: 'This is a test content',
      access: ''
    };
  }

  render() {
    console.log(this.state);
    return(
      <View>
        <Text>Data from AsyncStorage</Text>
        <ul>
          <li>{this.state.get('userInfo').ID || '-'}</li>
          <li>{this.state.get('userInfo').name || '-'}</li>
        </ul>
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
