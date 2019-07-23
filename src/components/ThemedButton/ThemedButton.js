import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import styles from "./style";

const ThemedButton = ({ title, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
};

export default ThemedButton;