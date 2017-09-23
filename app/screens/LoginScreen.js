import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>
      Login screen
    </Text>
  </View>
);

LoginScreen.navigationOptions = {
  title: 'Login Screen',
};


export default LoginScreen;
