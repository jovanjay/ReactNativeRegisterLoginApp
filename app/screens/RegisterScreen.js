import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const RegisterScreen = () => (
  <View style={styles.container}>
    <Text>
      Register screen
    </Text>
  </View>
);

RegisterScreen.navigationOptions = {
  title: 'Register Screen',
};

export default RegisterScreen;
