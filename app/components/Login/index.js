/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import { connect } from 'react-redux';
// import { getNav, getLogin } from '../../reducers';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = (state) => ({
  login : state.login
});

const mapDispatchToProps = (dispatch , state) => ({
  login: actions.login
});

export default connect(mapStateProps, mapDispatchToProps)(Login);
