/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import { connect } from 'react-redux';
import { nav.getNav, login.getLogin } from '../../reducers';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = state => ({
  ...getNav(state),
  ...getLogin(state)
});

const mapDispatchToProps = (dispatch , state) => ({
  login: actions.login
});

export default connect(mapStateProps, mapDispatchToProps)(Login);
