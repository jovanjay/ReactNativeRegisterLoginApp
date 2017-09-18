import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View } from 'react-native';


export default class LoginApp extends Component {
  render() {
    return(
      <View>
        <TextField text='Text 1'/>
        <TextField text='Text 2'/>
      </View>
    );
  }
}

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '' 
    };
  }

  render() {

    return (
      <TextInput

        style={styles.textInputField}

        onChangeText={
          (text) => this.setState({
            text
          })
        }

        value={
          this.state.text
        }
      />
    );
  }
}


const styles = StyleSheet.create({
  textInputField : {
      marginTop: 30,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1
    }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LoginApp);