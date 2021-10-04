import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Platform,
  Dimensions,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
export default function App() {
  console.log("Reloaded");
  let x = 1;
  const test = () => alert("TEST");
  const [mapRegion, setMapRegion] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
    })();
  }, []);
  const [friends] = useState([
    {
      username: "bob",
      description: "school friend",
      icon: "dog",
      location: {
        longitude: "77.3",
        latitude: "32.5",
      },
    },
    {
      username: "Alex",
      description: "Childhood friend",
      icon: "dragon",
      location: {
        longitude: "78.3",
        latitude: "32.8",
      },
    },
    {
      username: "Jack",
      description: "Business Partner",
      icon: "dove",
      location: {
        longitude: "77.7",
        latitude: "32.1",
      },
    },
  ]);

  return (
    // <View style={styles.container} onPress={test}>
    //   <Text >Open up App.js to start working on your app!</Text>
    //   <Text>HELLO</Text>
    //   <TouchableOpacity onPress={test}>
    //     <Image source={{
    //       width: 200,
    //       height: 200,
    //       uri: "https://picsum.photos/200"
    //     }}></Image>
    //     <Button title='click me' onPress={test} /></TouchableOpacity>
    //   <View style={{
    //     backgroundColor: "white",
    //     flex: 1
    //   }}>
    //   </View>
    //   <View style={{
    //     backgroundColor: "black",
    //     flex: 2
    //   }} />
    //   <View style={{
    //     backgroundColor: "red",
    //     flex: 1
    //   }} />
    // </View>
    <View style={styles.container} onPress={test}>
      {/* <View style={{ backgroundColor: "white", flex: 1 }}>
        <Text>asd</Text>
      </View>
      <View style={{ backgroundColor: "green", flex: 1 }}>
        <Text>asd</Text>
      </View>
      <View style={{ backgroundColor: "gold", flex: 1 }}>
        <Text>asd</Text>
      </View> */}

      <MapView
        initialRegion={{
          latitude: 23.727339,
          longitude: 90.375549,
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      >
        <Marker
          coordinate={{
            latitude: 23.727339,
            longitude: 90.375549,
            longitudeDelta: 0.0922,
            latitudeDelta: 0.0421,
          }}
          title="Niloy"
          description="teSt"
          onPress={test}
        >
          <View style={styles.circle}>
            <View style={styles.stroke} />
            <View style={styles.core} />
          </View>
        </Marker>
        {/* {friends
          ? friends.map((friend) => (
              <Marker
                coordinate={friend.location}
                title={friend.username}
                description={friend.description}
                key="{friend}"
              >
                <FontAwesome5
                  name={friend.icon}
                  size={26}
                  style={{ color: "red" }}
                />
              </Marker>
            ))
          : null} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  stroke: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  core: {
    backgroundColor: "dodgerblue",
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
