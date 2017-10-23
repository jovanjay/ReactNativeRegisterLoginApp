/**
 * Container Component
 */
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import * as actions from './actions';

const mapStateProps = (state) => ({
    load : state.splashReducer.load
});

const mapDispatchToProps = dispatch => ({
    load : () => dispatch(actions.userinfo())
});

export default connect(mapStateProps, mapDispatchToProps)(Dashboard);
