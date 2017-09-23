import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './AppNavigator';

class LoginApp extends Component {
  store = createStore(AppReducer);

  render(){
    return(
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  };
}

export default LoginApp;
