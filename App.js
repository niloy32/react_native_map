import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  FlatList,
} from "react-native";

const { width, height } = Dimensions.get("screen");
import Home from "./routes/HomeStack";

const App = ({}) => {
  return <Home />;
};

export default App;
