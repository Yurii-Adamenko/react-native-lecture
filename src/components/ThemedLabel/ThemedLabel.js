import React from "react";
import { Text } from "react-native";
import styles from "./style";

const ThemedLabel = ({ labelText }) => {
  return (
    <Text style={styles.label}>
      {labelText}
    </Text>
  );
};

export default ThemedLabel;
