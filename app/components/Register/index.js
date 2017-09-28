/**
 * Connects the State Props and Dispatch Props to the React Component via REACT-REDUX
 */
import Register from './Register';
import {connect} from 'react-redux';
import * as mapDispatchProps from './actions';
import {getNav, getRegister} from '../../reducers';

const mapStateProps = (state) => ({
  ...getNav(state),
  ...getRegister(state),
});

export default connect(mapStateProps, mapDispatchProps)(Register);
