import React from 'react'
import Base from "../common/Base";
import SFAppBar from "../common/SFAppBar";
import {Appbar} from "react-native-paper";
import { GiftedChat , Bubble , InputToolbar } from 'react-native-gifted-chat'
import {color}  from "../common/color";

export default class MessagePage extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    _goBack = () => this.props.navigation.goBack();

    renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: color.primary
                    }
                }}
            />
        )
    };

    renderInputToolbar = (props) => {
        //Add the extra styles via containerStyle
        return <InputToolbar {...props}
                             containerStyle={{borderTopWidth: 1, borderTopColor: '#ccc'}} />
    };

    render(): React.ReactNode {
        return (
            <Base>
                <SFAppBar>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Carebot"
                        subtitle="Online now"
                    />
                    <Appbar.Action icon="more-vert"/>
                </SFAppBar>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    renderBubble={this.renderBubble}
                    renderInputToolbar={this.renderInputToolbar}
                    user={{
                        _id: 1,
                    }}
                />
            </Base>
        )
    }
}