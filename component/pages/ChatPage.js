import React from 'react'
import Base from "../common/Base";
import SFAppBar from "../common/SFAppBar";
import {Appbar, Avatar} from 'react-native-paper';
import {List} from 'react-native-paper';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    avatarPosition: {
        marginTop: 10,
        marginRight: 10
    },
    drawerItem: {
        color: '#0052cc'
    }
});
export default class ChatPage extends React.Component {
    state = {
        userlist: [
            {
                avatar: 'https://avatars0.githubusercontent.com/u/8036283?s=400&v=4',
                alt: "Bot",
                title: "Carebot",
                subtitle: "I can help you",
                date: new Date(),
                unread: 0
            }
        ]
    };


    _goBack = () => this.props.navigation.goBack();

    _onSearch = () => console.log('Searching');

    _onMore = () => console.log('Shown more');

    render(): React.ReactNode {
        return (
            <Base>
                <SFAppBar>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Chat"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch}/>
                    <Appbar.Action icon="more-vert" onPress={this._onMore}/>
                </SFAppBar>


                {this.state.userlist.map((item) =>
                    <List.Item
                        title={item.title}
                        key={item.title}
                        description={item.subtitle}
                        left={props => <Avatar.Image style={styles.avatarPosition} {...props} size={38}
                                                     source={{uri: item.avatar}}/>
                        }
                    />
                )}
            </Base>
        )
    }
}