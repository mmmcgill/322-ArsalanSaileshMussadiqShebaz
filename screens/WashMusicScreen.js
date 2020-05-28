import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Player from "./Player";
import ImageCara from "./ImageCara";
import { LinearGradient } from "expo-linear-gradient";

let images = [
  require("../assets/images/best1.png"),
  require("../assets/images/best2.png"),
  require("../assets/images/best3.png"),
  require("../assets/images/best4.png"),
  require("../assets/images/best5.png"),
  require("../assets/images/best6.png"),
  require("../assets/images/best7.png"),
  require("../assets/images/best8.png"),
  require("../assets/images/best9.png"),
];

export default function WashMusicScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#08AEEA", "#2AF598"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 1000,
        }}
      />

      <View style={styles.icara}>
        <ImageCara images={images} />
      </View>

      <View style={styles.player}>
        <Player />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  icara: {
    paddingTop: 100,
  },
  player: {
    paddingTop: 20,
  },
});
