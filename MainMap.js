import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";
import MarkerRef from "./firebase";
const { width, height } = Dimensions.get("screen");

const App = ({ navigation }) => {
  const placeDetailsClick = () => {
    navigation.navigate("placeDetails");
  };
  state = { Markers: [] };
  // componentDidMount() {

  // }

  // useEffect(() => {
  //   let markers = [];
  //   MarkerRef.where("bookmark", "=", true).onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       markers.push(doc.data());
  //     });
  //   });
  // }, []);

  useEffect(() => {
    let markers = [];
    MarkerRef.where("bookmark", "=", true).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        markers.push(doc.data());
      });
    });
  }, []); // See Note 2

  const [friends] = useState([
    {
      id: 1,
      username: "bob",
      description: "school friend",
      icon: "dog",
      location: {
        longitude: 88.3,
        latitude: 42.8,
      },
    },
    {
      id: 12,
      username: "Alex",
      description: "Childhood friend",
      icon: "dragon",
      location: {
        longitude: 78.3,
        latitude: 32.8,
      },
    },
    {
      id: 13,
      username: "Jack",
      description: "Business Partner",
      icon: "dove",
      location: {
        longitude: 77.7,
        latitude: 32.1,
      },
    },
  ]);
  const [my_list] = useState([
    {
      id: 1,
      username: "Home",
      bookmark: true,
      description: "This is my home",
      icon: "dog",
      location: {
        latitude: 23.7269877,
        longitude: 90.3754865,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      Image: "https://picsum.photos/200",
      tags: ["Home", "Comfort", "Life"],
    },
    {
      id: 12,
      username: "Dhanmondi",
      description: "Nice place to eat",
      icon: "dragon",
      location: {
        latitude: 23.748161,
        longitude: 90.375283,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      Image: "https://i.ibb.co/mFHGVQc/Image20.png",
      bookmark: false,
    },
    {
      id: 13,
      username: "Uttra",
      description: "Nice place for vacation",
      icon: "dove",
      location: {
        latitude: 23.874163,
        longitude: 90.384122,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      Image: "https://i.ibb.co/mFHGVQc/Image23.png",
      bookmark: true,
    },
  ]);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //     }

  //     //let location = await Location.getCurrentPositionAsync({});
  //     let location = await Location.getCurrentPositionAsync({
  //       enableHighAccuracy: true,
  //     });

  //     console.log(location);
  //     setLocation(location);

  //     setMapRegion({
  //       longitude: location.coords.longitude,
  //       latitude: location.coords.latitude,
  //       longitudeDelta: 0.0922,
  //       latitudeDelta: 0.0421,
  //     });
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 23.7269877,
          longitude: 90.3754865,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      >
        {my_list
          ? my_list.map((friend) => (
              <TouchableOpacity>
                <Marker
                  coordinate={friend.location}
                  title={friend.username}
                  description={friend.description}
                  key={friend.key}
                >
                  <Image
                    style={styles.circle}
                    source={{ uri: friend.Image }}
                  ></Image>

                  {friend.bookmark && (
                    <Image
                      style={styles.bookmark}
                      source={require("./assets/2377874.png")}
                    ></Image>
                  )}
                  <Callout
                    onPress={() => navigation.navigate("placeDetails", friend)}
                    style={{
                      position: "absolute",
                      width: 200,
                      height: 220,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 100,
                    }}
                  >
                    <Text> {friend.username}</Text>
                    <Text>
                      <Image
                        style={{
                          height: 100,
                          width: 200,
                        }}
                        source={{ uri: friend.Image }}
                      ></Image>
                    </Text>
                    <Text>{friend.description}</Text>
                  </Callout>
                </Marker>
              </TouchableOpacity>
            ))
          : null}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width,
    height,
  },
  mapView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width,
    height,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bookmark: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    left: 18,
    zIndex: 5,
  },
  callout_image: {
    width: "10%",
    height: "10%",
  },
  stroke: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  core: {
    backgroundColor: "red",
    width: 24,
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    height: 24,
    borderRadius: 50,
    zIndex: 2,
  },
});

export default App;
