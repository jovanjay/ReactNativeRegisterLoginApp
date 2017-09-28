/**
 * Container Component
 */
import Login from './Login';
import {connect} from 'react-redux';
import * as mapDispatchProps from './actions';
import {getNave, getLogin} from '../../reducers';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = (state) => ({
  ...getNav(state),
  ...getLogin(state),
});

export default connect(mapStateProps, mapDispatchProps)(Login);
