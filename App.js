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
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { createStackNavigator } from "react-navigation-stack";
import ReviewDetails from "./placeDetails";

const App = ({ navigation }) => {
  const test = () => alert("pera");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const init = { longitude: 78.3, latitude: 32.8 };
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
      description: "This is my home",
      icon: "dog",
      location: {
        latitude: 23.7269877,
        longitude: 90.3754865,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      Image: "https://picsum.photos/200",
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
      Image: "https://picsum.photos/200",
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
      Image: "https://picsum.photos/200",
    },
  ]);
  const [reviews, setReviews] = useState([
    { title: "zelda 1", rating: 5, body: "body1", key: "1" },
    { title: "zelda 2", rating: 5, body: "body2", key: "2" },
    { title: "zelda 3", rating: 5, body: "body3", key: "3" },
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
  //     console.log("locatiion data");
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
      <StatusBar style="auto" />
      <MapView
        initialRegion={{
          latitude: 23.7269877,
          longitude: 90.3754865,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // initialRegion={mapRegion}
        style={styles.mapView}
      >
        {/* <Marker
          coordinate={{
            latitude: 23.748161,
            longitude: 90.375283,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title="Niloy"
          description="Dont Click ME"
        >
          <Image
            style={styles.circle}
            mapType="hybrid"
            source={{
              width: 20,
              height: 20,
              uri: "https://picsum.photos/200",
            }}
          ></Image>
        </Marker>
        <Marker
          coordinate={{
            latitude: 23.874163,
            longitude: 90.384122,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title="Niloy"
          description="Dont Click ME"
        >
          <Image
            style={styles.circle}
            source={require("./assets/Image23.png")}
          ></Image>
        </Marker>
        <Marker
          coordinate={{
            latitude: 23.793446,
            longitude: 90.408237,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title="Niloy"
          description="Dont Click ME"
        >
          <Image
            style={styles.circle}
            source={require("./assets/Image20.png")}
          ></Image>
        </Marker> */}

        {/* <Marker
          coordinate={location_.location}
          title={location_.username}
          description={location_.description}
          key={location_.id}
          // image={require("./assets/Image20.png")}
        >
          <Callout onPress={test}>
            <Text>{location_.username}</Text>
            <Text>
              <Image source={require("./assets/Image20.png")}></Image>
            </Text>
            <Text>{location_.description}</Text>
          </Callout> */}
        {/* <FontAwesome5
                  name={location_.icon}
                  size={26}
                  style={{ color: "blue" }}
                /> */}
        {/* <Image style={styles.circle} source={require(location_.Image)} /> */}
        {/* <Text style={{ fontSize: 15 }}>Modal Text</Text> */}
        {/* <Image
            style={styles.circle}
            source={require("./assets/Image20.png")}
          ></Image>{" "}
          key={my_list[0].id}>
        </Marker> */}
        <Marker
          coordinate={my_list[0].location}
          title={my_list[0].username}
          description={my_list[0].description}
          key={my_list[0].id}
        >
          <Image
            style={styles.circle}
            source={require("./assets/Image20.png")}
          ></Image>
          <Callout
            onPress={() => navigation.navigate("ReviewDetails", { item })}
            style={{
              position: "absolute",
              width: 200,
              height: 220,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text> NAME</Text>

            <Text>
              <Image
                style={{
                  height: 100,
                }}
                source={require("./assets/Image20.png")}
              ></Image>
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              atque ut animi quisquam, reprehenderit distinctio a.
            </Text>
          </Callout>
        </Marker>

        {/* {my_list
          ? my_list.map((location_) => (
              <Marker
                coordinate={location_.location}
                title={location_.username}
                description={location_.description}
                key={location_.id}
                // image={require("./assets/Image20.png")}
              >
                <Callout onPress={test}>
                  <Text>{location_.username}</Text>
                  <Text>
                    <Image source={require("./assets/Image20.png")}></Image>
                  </Text>
                  <Text>{location_.description}</Text>
                </Callout> */}
        {/* <FontAwesome5
                  name={location_.icon}
                  size={26}
                  style={{ color: "blue" }}
                /> */}
        {/* <Image style={styles.circle} source={require(location_.Image)} /> */}

        {/* <Text style={{ fontSize: 15 }}>Modal Text</Text> */}
        {/* <Image
                  style={styles.circle}
                  source={require("./assets/Image20.png")}
                ></Image>
              </Marker>
            ))
          : null} */}
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
