import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Map from "../MainMap";
import placeDetails from "../placeDetails";
const AppNavigator = createStackNavigator({
  Home: {
    screen: Map,
  },
  placeDetails: {
    screen: placeDetails,
  },
});

export default createAppContainer(AppNavigator);
