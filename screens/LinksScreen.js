import * as React from "react";
import { StyleSheet, Text, View, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function LinksScreen() {
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

      <View style={styles.linksB}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.cdc.gov/handwashing/when-how-handwashing.html"
            );
          }}
        >
          <Image
            style={styles.tinyLogoCDC}
            source={require("../assets/images/cdc-logo.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.linksB}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.who.int/gpsc/clean_hands_protection/en/"
            );
          }}
        >
          <Image
            style={styles.tinyLogoWHO}
            source={require("../assets/images/who-logo.jpeg")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  tinyLogoCDC: {
    width: 160,
    height: 150,
    resizeMode: "contain",
    borderRadius: 60,
  },
  tinyLogoWHO: {
    width: 190,
    height: 100,
    resizeMode: "cover",
    borderRadius: 90,
  },
  linksB: {
    paddingTop: 125,
  },
});
