/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Login.propTypes = {
  loginAttempt : PropTypes.func.isRequired,
}

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = state => ({
    loginAttempt : state.loginReducer.loginAttempt
});

const mapDispatchToProps = dispatch => ({
    loginAttempt : (email,password) => dispatch(actions.login(email,password))
})

export default connect(mapStateProps, mapDispatchToProps)(Login);