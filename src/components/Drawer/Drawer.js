import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styles from './style';
import { ThemedButton } from '../ThemedButton/ThemedButton';

export default class Drawer extends Component {
  render() {
    console.log(props);
    console.log(this.props);
    return (
      <View>
        {/* <DrawerItems
          {...props}
          getLabel={scene => (
            <View>
              <Text>{props.getLabel(scene)}</Text>
            </View>
          )}
        /> */}
        <DrawerItems {...props}/>
        <Text>It's Drawer</Text>
        <Text>It's Drawer</Text>
        <Text>It's Drawer</Text>
        <Text>It's Drawer</Text>
        <Text>It's Drawer</Text>
        <ThemedButton title="LogOut" />
      </View>
    );
  }
}
