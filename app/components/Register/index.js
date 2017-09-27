/**
 * Container Component
 */
import Register from './Register';
import {connect} from 'react-redux';
import * as actions from './actions';
import {getNav, getRegister} from '../../reducers';

const mapStateProps = (state) => ({
  ...getNav(state),
  ...getRegister(state),
});

export default connect(mapStateProps, actions)(Register);
