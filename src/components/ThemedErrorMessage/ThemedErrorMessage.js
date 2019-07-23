import React from "react";
import { Text } from "react-native";
import styles from "./style";

const ThemedErrorMessage = ({ errorMessage }) => {
  return (
    <Text style={styles.errorMessage}>
      {errorMessage}
    </Text>
  );
};

export default ThemedErrorMessage;
