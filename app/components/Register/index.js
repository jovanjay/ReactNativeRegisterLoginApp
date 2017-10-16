/**
 * Connects the State Props and Dispatch Props to the React Component via REACT-REDUX
 */
import Register from './Register';
import {connect} from 'react-redux';
import * as actions from './actions';
import {getNav, getRegister} from '../../reducers';

const mapStateProps = (state) => ({
  registerAttempt: state.registerReducer.registerAttempt
});

const mapDispatchToProps = dispatch => ({
  registerAttempt: (name,email,password) => 
    dispatch(actions.register(name,email,password))
});

export default connect(mapStateProps, mapDispatchToProps)(Register);
