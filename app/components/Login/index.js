/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import { connect } from 'react-redux';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = (state) => {
  return {
    loginAttempt : state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginAttempt : (email,password) => dispatch(actions.loginAttempt(email,password))
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Login);
