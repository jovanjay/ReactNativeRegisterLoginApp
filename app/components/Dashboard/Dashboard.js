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

class Dashboard extends Component {
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
          title='Logout'
          onPress={this.props.logout}
        />
      </View>
    );
  }
}

export default Login;
