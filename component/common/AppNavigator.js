import {createStackNavigator, createAppContainer} from "react-navigation";
import SplashPage from "../pages/SplashPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import CalendarPage from "../pages/CalendarPage";
import MessagePage from "../pages/MessagePage";

const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashPage
    },
    Login : {
        screen: LoginPage
    },
    Home : {
        screen: HomePage
    },
    Chat : {
        screen : ChatPage
    },
    Calendar : {
        screen : CalendarPage
    },
    Messages : {
        screen : MessagePage
    }
}, {
    initialRouteName: "Splash",
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);