import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";

export default function Timer({ navigation }) {
  // setTimeout(() => {
  //   navigation.navigate("WashMusic");
  // }, 3000);
  return (
    // <View style={styles.container}>
    //   <Text>This is the Timer sreen!</Text>

    //   <TouchableOpacity onPress={() => navigation.navigate("WashMusic")}>
    //     <Handwash />
    //   </TouchableOpacity>

    // </View>

    <View style={styles.container}>
      <CountDown
        size={150}
        until={3}
        onFinish={() => navigation.navigate("WashMusic")}
        digitStyle={{
          backgroundColor: "#FFF",
          borderColor: "#1CC625",
        }}
        digitTxtStyle={{ color: "#1fc7ff" }}
        timeLabelStyle={{ color: "red", fontWeight: "bold" }}
        separatorStyle={{ color: "#1CC625" }}
        timeToShow={["S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 200,
  },
});
