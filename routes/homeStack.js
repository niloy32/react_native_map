import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import placeDetails from "../placeDetails";

const screens = {
  Home: {
    screens: placeDetails,
  },
  // ReviewDetails: {
  //     screens: placeDetails
  // }
};

const HomeStack = createStackNavigator({ screens });

export default createAppContainer(HomeStack);
