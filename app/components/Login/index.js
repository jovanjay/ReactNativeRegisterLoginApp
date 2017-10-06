/**
 * Container Component
 */
import Login from './Login';
import * as actions from './actions';
import {getNav, getLogin} from '../../reducers';

//Map states to props - because we want to know what
//state are we currently in right now
const mapStateProps = state => ({
  // ...getNav(state),
  // ...getLogin(state),
  login: getLogin(state)
});

const mapDispatchToProps = dispatch => ({
  login: actions.login(user)
});

export default connect(mapStateProps, mapDispatchToProps)(Login);
