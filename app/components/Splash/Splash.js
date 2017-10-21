/**
 * Presentational Component
 */
import React, { Component } from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import styles from '../../AppStyles';

let interval;
class Splash extends Component {
    
    componentDidMount(){
        this.props.load();
    }

    constructor(props){
        super(props);
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