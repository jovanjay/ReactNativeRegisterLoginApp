/**
 * Presentational Component
 */
import { Component } from 'react';
import {
  View,
} from 'react-native';
import styles from '../../AppStyles';

class Splash extends Component {
    
    componentDidMount(){
        //TODO : initialize app here
    }

    render() {
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
}

export default Splash;