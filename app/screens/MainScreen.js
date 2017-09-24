import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import LoginButton from '../components/Main/LoginButton';
import RegisterButton from '../components/Main/RegisterButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = () => (
  <View style={styles.container}>
    <Text>
      Main screen
    </Text>
    <LoginButton/>
    <RegisterButton/>
  </View>
);

export default MainScreen;
