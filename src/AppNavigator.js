import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import { SignIn, SignUp, Dashboard, DetailedView } from './screens';
import { Drawer } from './components';


const AuthStack = createStackNavigator(
  {
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
  }
);

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  DetailedView: {
    screen: DetailedView
  }
});

const DrawerNavigator = createDrawerNavigator(
  {
    DashboardStack: { screen: DashboardStack }
  },
  {
    drawerPosition: 'right',
    contentComponent: Drawer
  }
);

const AppContainer = createSwitchNavigator({
  Auth: { screen: AuthStack },
  App: { screen: DrawerNavigator }
});

export default createAppContainer(AppContainer);