import * as React from "react";
import { StyleSheet, Text, View, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LinksScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.cdc.gov/handwashing/when-how-handwashing.html"
            );
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/cdc-logo.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.who.int/gpsc/clean_hands_protection/en/"
            );
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/who-logo.jpeg")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 100,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
