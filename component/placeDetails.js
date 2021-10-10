import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { db } from "../server/firebase";
import MarkerRef from "../server/firebase";
const PlaceDetails = ({ navigation }) => {
  let tags = navigation.getParam("tags");
  const [imageUrl, setImageUrl] = useState();
  var flag = true;
  const db_data = [];
  var markers = ["NO DATA FROM SERVER"];
  const [getMarker, setMarker] = useState([]);
  useLayoutEffect(() => {
    MarkerRef.doc(navigation.getParam("doc_id")).onSnapshot((doc) => {
      //console.log("Current data: ", doc.data());
      setMarker(Object.values(doc));
      key = doc.data().id;
      markers.push(doc.data());
      setMarker(markers);
    });
  }, []);

  console.log("THIS");
  // flag = getMarker[1];
  // console.log(flag);
  const data_nav = navigation.state.params;

  const BookMark = () => {
    // Add a new document in collection "cities"
    db.collection("markers")
      .doc(navigation.getParam("doc_id"))
      .set({
        Image: navigation.getParam("Image"),
        bookmark: !navigation.getParam("bookmark"),
        description: navigation.getParam("description"),
        id: navigation.getParam("id"),
        latitude: navigation.getParam("latitude"),
        latitudeDelta: navigation.getParam("latitudeDelta"),
        longitude: navigation.getParam("longitude"),
        longitudeDelta: navigation.getParam("longitudeDelta"),
        tags: navigation.getParam("tags"),
        username: navigation.getParam("username"),
        doc_id: navigation.getParam("doc_id"),
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    //end
    if (flag == true) {
      setImageUrl("https://i.ibb.co/Wx9Tf3B/2377941.png");
      console.log(flag);
    } else {
      setImageUrl("https://i.ibb.co/g9XgHqS/2377874.png");
      console.log(flag);
    }
    flag = !flag;
  };
  return (
    <View>
      <Image
        style={{ height: 250 }}
        source={{ uri: navigation.getParam("Image") }}
      ></Image>
      <Text
        style={{
          textAlign: "center", // <-- the magic
          fontWeight: "bold",
          fontSize: 24,
          marginRight: -50,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {navigation.getParam("username")}
        <View>
          <TouchableOpacity onPress={BookMark}>
            {flag == true && (
              <Image
                style={{
                  flex: 1,
                  width: 30,
                  height: 50,
                }}
                source={{
                  width: 200,
                  height: 200,
                  uri: "https://i.ibb.co/Wx9Tf3B/2377941.png",
                }}
              ></Image>
            )}
            {!flag && (
              <Image
                style={{
                  flex: 1,
                  width: 30,
                  height: 50,
                }}
                source={{
                  width: 200,
                  height: 200,
                  uri: "https://i.ibb.co/g9XgHqS/2377874.png",
                }}
              ></Image>
            )}
          </TouchableOpacity>
        </View>
      </Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        {tags
          ? tags.map((tag) => (
              <Text style={mapDetail.tags} key={tag}>
                {tag}
              </Text>
            ))
          : null}
        {/* {navigation.getParam("tags").forEach((element) => (
          <Text style={mapDetail.tags}>asd</Text>
        ))} */}
      </View>
      <Text>
        ...........................................................................................................
      </Text>
      <Text style={{ textAlign: "center", padding: 15 }}>
        {navigation.getParam("description")}
      </Text>
      <Button
        title=" Back To Map"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
const mapDetail = StyleSheet.create({
  tags: {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#207fc9",
    borderRadius: 20,
    borderColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    paddingTop: 5,
  },
});
export default PlaceDetails;
