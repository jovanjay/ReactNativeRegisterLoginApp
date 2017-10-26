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
        <Text>
        Welcome
        </Text>
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
