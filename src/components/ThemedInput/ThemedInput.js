import React from "react";
import { TextInput } from "react-native";
import styles from "./style";

const ThemedInput = ({ onChangeText, value, placeholder, secureTextEntry, ...props }) => {
  return (
    <TextInput
      style={styles.loginForm}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default ThemedInput;
