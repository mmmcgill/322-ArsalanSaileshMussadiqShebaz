import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Linking, Button } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function LinksScreen() {
  // return (
  //   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
  //     <Text style={styles.contentContainer}>This is the information screen</Text>
  //   </ScrollView>
  // );
  return (
    <View style={styles.screen}>
      <Button
        title="CDC"
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://www.cdc.gov/handwashing/when-how-handwashing.html"
          );
        }}
      ></Button>
      <Button
        title="WHO"
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://www.who.int/gpsc/clean_hands_protection/en/"
          );
        }}
      ></Button>
    </View>
  );
}

// function OptionButton({ icon, label, onPress, isLastOption }) {
//   return (
//     <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.optionIconContainer}>
//           <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
//         </View>
//         <View style={styles.optionTextContainer}>
//           <Text style={styles.optionText}>{label}</Text>
//         </View>
//       </View>
//     </RectButton>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
//   },
//   contentContainer: {
//     paddingTop: 15,
//   },
//   optionIconContainer: {
//     marginRight: 12,
//   },
//   option: {
//     backgroundColor: '#fdfdfd',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderBottomWidth: 0,
//     borderColor: '#ededed',
//   },
//   lastOption: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   optionText: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 1,
//   },
// });

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 150,
  },
  button: {
    marginLeft: "39%",
  },
});
