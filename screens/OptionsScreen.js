import * as React from "react";
import { StyleSheet, Text, View, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import Credits from './CreditsScreen';


export default function OptionsScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#08AEEA', '#2AF598']}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 1000,
        }}
      />

      <View style={{ paddingTop: 100 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
          <View style={styles.buttoncont}>
            <Text style={styles.buttontext}>Credits</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 100,
  },
  tinyLogoCredits: {
    width: 300,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  linksB: {
    paddingTop: 20,
  },
  buttoncont: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#151B54',
    borderRadius: 50,
  },
  buttontext: {
    margin: 10,
    fontSize: 20,
    color: 'white'
  },
});


