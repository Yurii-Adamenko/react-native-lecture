import React from "react";
import { PacmanIndicator } from 'react-native-indicators';

const ThemedLoader = ({ color, size }) => {
  return <PacmanIndicator color={color} size={size} />;
};

export default ThemedLoader;
