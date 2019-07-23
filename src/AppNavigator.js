import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { SignIn, SignUp, Dashboard, DetailedView, Drawer } from "./screens";

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#8aaede'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  DetailedView: {
    screen: DetailedView
  }
});


const DrawerNavigator = createDrawerNavigator({
  DashboardStack: { screen: DashboardStack }
}, {
  // drawerWidth: 300,
  drawerPosition: 'right',
  // hideStatusBar: false
  contentComponent: Drawer
});

const AppContainer = createSwitchNavigator({
  Auth: { screen: AuthStack },
  App: { screen: DrawerNavigator }
});

export default createAppContainer(AppContainer);