import {createStackNavigator, createAppContainer} from "react-navigation";
import SplashPage from "../pages/SplashPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import CalendarPage from "../pages/CalendarPage";

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
    }
}, {
    initialRouteName: "Splash",
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);