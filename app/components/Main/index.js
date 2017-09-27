/**
 * Container Component
 */
import Main from './Main';
import {connect} from 'react-redux';
import * as actions from './actions';

const login = (state) => {

}

const mapStateProps = (state) => ({
  ...login(state),
});


export default connect(mapStateProps, actions)(Main);
