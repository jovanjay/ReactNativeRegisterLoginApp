/**
 * Container Component
 */
import Login from './Login';
import {connect} from 'react-redux';
import * as actions from './actions';
import {getNave, getLogin} from '../../reducers';

const mapStateProps = (state) => ({
  ...getNav(state),
  ...getLogin(state),
});

export default connect(mapStateProps, actions)(Login);
