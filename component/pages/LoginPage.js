import React from 'react'
import Base from "../common/Base";
import {StyleSheet} from "react-native";
import {Platform, Text, View, Image} from 'react-native';
import { TextInput } from 'react-native-paper';

export default class LoginPage extends React.Component {

    render(): React.ReactNode {
        return (
            <Base>
                <View style={styles.container}>
                    <TextInput
                        label='Username'
                        mode={"outlined"}
                    />
                </View>
            </Base>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
})