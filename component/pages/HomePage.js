import React from 'react'
import Base from "../common/Base";
import SFAppBar from "../common/SFAppBar";
import {DrawerLayoutAndroid, View, Text, StyleSheet, ScrollView} from 'react-native'
import {Appbar, Divider, Drawer, List, Avatar,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    avatarPosition: {
        marginTop: 10,
        marginRight: 10
    },
    drawerItem: {
        color: '#0052cc'
    }
});

const navItems = [
    {
        icon: "local-offer",
        title: "Tickets"
    },
    {
        icon: "thumbs-up-down",
        title: "Approvals"
    },
    {
        icon: "folder",
        title: "Vacation"
    },
    {
        icon: "call",
        title: "On Calls"
    },
    {
        icon: "speaker-notes",
        title: "Notes"
    }, {
        icon: "visibility",
        title: "WatchList"
    },
    {
        icon: "folder",
        title: "Change Management"
    },
    {
        icon: "folder",
        title: "Vendor"
    },
    {
        icon: "date-range",
        title: "Calendar",
        click : (navigation) => navigation.navigate('Calendar')
    },
    {
        icon: "settings",
        title: "Settings"
    },
    {
        icon: "chat-bubble",
        title: "Chat",
        click: (navigation) => navigation.navigate('Chat')
    },
    {
        icon: "help-outline",
        title: "Guide"
    },
    {
        icon: "lock-open",
        title: "Logout"
    }
];

const navigationView = (navprops) => (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <List.Item
            title="Poovarasan"
            description="Online Now"
            left={props => <Avatar.Image style={styles.avatarPosition} {...props} size={38}
                                         source={{uri: "https://avatars0.githubusercontent.com/u/8036283?s=400&v=4"}}/>}
        />

        <ScrollView>
            <Divider/>
            {navItems.map((item) =>
                <Drawer.Item style={styles.drawerItem}
                             key={item.title}
                             label={item.title}
                             onPress={() => item.click ? item.click(navprops) : null}
                             icon={item.icon}/>
            )}
        </ScrollView>
    </View>
);

export default class HomePage extends React.Component {

    toggleDrawer(): void {
        this.refs['HOME_DRAWER'].openDrawer();
    }

    render(): React.ReactNode {
        return (
            <Base>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    ref={'HOME_DRAWER'}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView(this.props.navigation)}>
                    <View>
                        <SFAppBar>
                            <Appbar.Action
                                icon="menu"
                                onPress={() => this.toggleDrawer()}
                            />
                            <Appbar.Content
                                title="Service Focus"
                            />
                        </SFAppBar>
                    </View>
                </DrawerLayoutAndroid>

            </Base>
        )
    }
}