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

const DashBoardScreen = () => (
  <View style={styles.container}>
    <Text>
      Dashboard screen
    </Text>
  </View>
);

DashBoardScreen.navigationOptions = {
  title: 'dashboard Screen',
};

export default DashBoardScreen;
