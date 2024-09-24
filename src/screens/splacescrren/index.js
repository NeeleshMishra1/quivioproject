import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import styles from './style';

export default class Splace extends Component {

    handleHome = () => {
        const { navigation } = this.props;
        navigation.reset({
            index: 0,
            routes: [{ name: 'tutorial' }],
        });
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.handleHome();
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container1}>
                <ImageBackground
                    source={require('../../assets/image/image.png')}  
                    style={styles.container2}
                />
            </View>
        );
    }
}


