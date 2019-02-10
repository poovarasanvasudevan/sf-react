import React from 'react'
import {StatusBar} from 'react-native'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {color} from './color'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: color.primary,
        accent: 'yellow',
    },
};

export default class Base extends React.Component {

    render(): React.ReactNode {
        return (

            <PaperProvider theme={theme}>
                <StatusBar barStyle="light-content"
                           backgroundColor={color.primaryDark}/>
                {this.props.children}
            </PaperProvider>

        )
    }
}