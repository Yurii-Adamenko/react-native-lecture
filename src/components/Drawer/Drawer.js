import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { DrawerItems } from 'react-navigation';
// eslint-disable-next-line import/no-cycle
import { ThemedButton } from '..';
import { logOut } from '../../store/actions/auth/authActions';

const Drawer = ({ navigation, logOut, ...props }) => {
  clickLogOut = () => {
    logOut(navigation);
  };

  return (
    <View
      style={{ padding: 20, marginVertical: 50, flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <View>
        <ThemedButton title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <ThemedButton title="DetailedView" onPress={() => navigation.navigate('DetailedView')} />
        {/* <DrawerItems {...props} /> */}
      </View>
      <ThemedButton title="LogOut" onPress={this.clickLogOut} />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: navigation => dispatch(logOut(navigation))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Drawer);
