/**
 * Container Component
 */
import Splash from './Splash';
import {connect} from 'react-redux';
import * as actions from './actions';

const mapStateProps = (state) => ({
    load : state.splashReducer.load
});

const mapDispatchToProps = dispatch => ({
    load : () => dispatch(actions.handshake())
});

export default connect(mapStateProps, mapDispatchToProps)(Splash);