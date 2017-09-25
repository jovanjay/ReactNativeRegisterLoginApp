import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text>
      Main screen
    </Text>
    <LoginButton/>
    <RegisterButton/>
  </View>
);

export default Main;
