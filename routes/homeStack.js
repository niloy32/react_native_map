import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Map from "../component/MainMap";
import placeDetails from "../component/placeDetails";
const AppNavigator = createStackNavigator({
  Home: {
    screen: Map,
  },
  placeDetails: {
    screen: placeDetails,
  },
});

export default createAppContainer(AppNavigator);
