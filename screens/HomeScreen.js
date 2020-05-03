import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function HomeScreen({ navigation }) {
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

      {/* <View style={styles.optionsB}>
        <TouchableOpacity onPress={() => navigation.navigate('Options')}>
          <FontAwesome name="gear" size={55} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.welcomeContainer}>
        <Text style={{ fontSize: 40 }}>
          SCRUB
        </Text>
      </View>

      <View style={{ paddingTop: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('WashMusic')}>
          <Image source={require("../assets/images/hw2.svg")} style={styles.washHands} />
        </TouchableOpacity>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 75,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  optionsB: {
    paddingRight: 290,
  },
  washHands: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 80,
  },
});
