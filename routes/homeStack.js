// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import PlaceDetails from "../placeDetails";

// const screens = {
//   Home: {
//     screens: PlaceDetails,
//   },
// };

// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);

// ReviewDetails: {
//     screens: placeDetails
// }

import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Map from "../test";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Map,
  },
});

export default createAppContainer(AppNavigator);
