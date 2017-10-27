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
        <Text>
<<<<<<< HEAD
        Data from AsyncStorage
        {this.state.get('userInfo').name}
=======
        Welcome
>>>>>>> ab0714b187ff7b12f20d0891e8c8a555b02bd6c5
        </Text>
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Dashboard;
