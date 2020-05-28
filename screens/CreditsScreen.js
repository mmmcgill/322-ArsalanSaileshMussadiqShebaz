import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CreditsScreen() {
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

      <View style={{ paddingTop: 40 }}>
        <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/anw10");}}>
          <View style={styles.buttoncont}>
            <Text style={styles.buttontext}>Arsalan Bin Najeeb</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/shebazchy");}}>
          <View style={styles.buttoncont}>
            <Text style={styles.buttontext}>Shebaz Chowdhury</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/dahalSailesh");}}>
          <View style={styles.buttoncont}>
            <Text style={styles.buttontext}>Sailesh Dahl</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/javed96");}}>
          <View style={styles.buttoncont}>
            <Text style={styles.buttontext}>Musaddiq Javed</Text>
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
    backgroundColor: '#fff',
    paddingTop: 100,
    zIndex: 100,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  optionsB: {
    paddingRight: 290
  },
  buttoncont: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#151B54',
    borderRadius: 50,
  },
  buttontext: {
    margin: 5,
    fontSize: 20,
    color: 'white',
  },
});