import React, { useEffect, useState } from "react";
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
const PlaceDetails = ({ navigation }) => {
  var flag = false;
  let tags = navigation.getParam("tags");
  console.log(tags);
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/Wx9Tf3B/2377941.png"
  );
  const BookMark = () => {
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
            <Image
              style={{
                flex: 1,
                width: 30,
                height: 50,
              }}
              // source={require("./assets/2377874.png")}
              source={{ width: 200, height: 200, uri: imageUrl }}
            ></Image>
          </TouchableOpacity>
        </View>
      </Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        {tags
          ? tags.map((tag) => <Text style={mapDetail.tags}>{tag}</Text>)
          : null}
      </View>
      <Text>
        ...........................................................................................................
      </Text>
      <Text style={{ textAlign: "center", padding: 15 }}>
        {navigation.getParam("description")}
      </Text>
      {/* <Button title="Add as bookmark" /> */}
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
