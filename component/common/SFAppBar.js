import React from 'react'
import {Appbar, Surface} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    surface: {
        elevation: 4,
    },
});

export default class SFAppBar extends React.Component {


    render(): React.ReactNode {
        return (
            <Surface style={styles.surface}>
                <Appbar.Header>
                    {this.props.children}
                </Appbar.Header>
            </Surface>
        )
    }
}