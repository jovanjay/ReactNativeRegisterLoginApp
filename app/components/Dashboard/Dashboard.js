/**
 * Presentational Component
 */
import Immutable from 'immutable';
import React, { Component } from 'react';
import {
    Button,
    Text,
    View,
    AsyncStorage
} from 'react-native';


import styles from './styles';

class Dashboard extends Component {

    componentDidMount() {
        this.loadUserInfo();
    }

    constructor(props) {
        super(props);
        this.state = {
            message: 'This is a test content',
            access: '' ,
            userInfo: {}
        };
    }

    async loadUserInfo() {
        const user_info = await AsyncStorage.getItem('user_info');
        const ui = JSON.parse(user_info);
        if (ui.id > 0) {
            this.setState({
                userInfo : ui
            });
        }
        console.log(this.state.userInfo);
    }

    render() {
        return (
            <View>
                <Text>Data from AsyncStorage </Text>
                <Text>{this.state.userInfo.id}</Text>
                <Text>{this.state.userInfo.name}</Text>
                <Text>{this.state.userInfo.email}</Text>
                <Text>
                    {this.state.message}
                </Text>
            </View>
        );
    }
}

export default Dashboard;
