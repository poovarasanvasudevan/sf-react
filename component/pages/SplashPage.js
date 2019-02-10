/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Base from "../common/Base";
import Logo from "../assets/image/Logo.png"


type Props = {};
export default class SplashPage extends Component<Props> {


    componentDidMount(): void {
        const {navigate} = this.props.navigation

        setTimeout(()=> {
            navigate('Home')
        } , 1000)
    }

    render() {
        return (
            <Base>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.logoImage}/>
                </View>
            </Base>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logoImage: {
        width: 180,
        resizeMode: 'contain'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
