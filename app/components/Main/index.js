/**
 * Container Component
 */
import Main from './Main';
import {connect} from 'react-redux';
import * as mapDispatchProps from './actions';

const login = (state) => {

}

const mapStateProps = (state) => ({
  ...login(state)
});


export default connect(mapStateProps, mapDispatchProps)(Main);
