import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useLayoutEffect } from "react";
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
import MarkerRef from "../server/firebase";
import { db } from "../server/firebase";
//import Marker from "./Marker";
const { width, height } = Dimensions.get("screen");

const App = ({ navigation }) => {
  handleOnNavigateBack = (foo) => {
    setMarker(test);
  };
  const [getMarker, setMarker] = useState([]);
  const [seconds, setSeconds] = useState(0);
  var markers = ["NO DATA FROM SERVER"];
  useEffect(() => {
    MarkerRef.onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      (querySnapshot) => {
        setMarker(Object.values(querySnapshot));
        querySnapshot.forEach((doc) => {
          key = doc.data().id;
          markers.push(doc.data());
        });
        setMarker(markers);
      }
    );
    //setMarker(test);
  }, []);

  return (
    <View style={styles.container} key={1}>
      <MapView
        initialRegion={{
          latitude: 23.7269877,
          longitude: 90.3754865,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      >
        {getMarker.map((mark) => (
          <TouchableOpacity key={mark.id}>
            <Marker
              coordinate={{
                latitude: mark.latitude || 0,
                longitude: mark.longitude || 0,
                latitudeDelta: mark.latitudeDelta,
                longitudeDelta: mark.longitudeDelta,
              }}
              title={mark.username}
              description={mark.description}
              key={mark.id}
            >
              <Image style={styles.circle} source={{ uri: mark.Image }}></Image>

              {mark.bookmark && (
                <Image
                  style={styles.bookmark}
                  source={{ uri: "https://i.ibb.co/g9XgHqS/2377874.png" }}
                ></Image>
              )}
              <Callout
                onPress={() => navigation.navigate("placeDetails", mark)}
                style={{
                  position: "absolute",
                  width: 200,
                  height: 220,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                }}
              >
                <Text> {mark.username}</Text>
                <Text>
                  <Image
                    style={{
                      height: 100,
                      width: 200,
                    }}
                    source={{ uri: mark.Image }}
                  ></Image>
                </Text>
                <Text>{mark.description}</Text>
              </Callout>
            </Marker>
          </TouchableOpacity>
        ))}
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
