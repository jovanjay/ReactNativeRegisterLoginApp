/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import { connect } from 'react-redux';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = state => ({
  login : state.login.login,
  loginSuccess: state.login.loginSuccess,
});

const mapDispatchToProps = dispatch => ({
  login: actions.login,
  loginSuccess: actions.loginSuccess,
});

export default connect(mapStateProps,mapDispatchToProps)(Login);
