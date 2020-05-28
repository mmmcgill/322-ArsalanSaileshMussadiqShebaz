import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
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

      <View style={styles.welcomeContainer}>
        <Text style={{ fontFamily: 'Anton',fontSize: 40, paddingRight: 20, paddingLeft: 20, color:'#151B54'} }>
          
          1) Arsalan Bin Najeeb
          2) Musaddiq Javed
          3) Sailesh Dahl   

           4)Shebaz Chaudary 

        </Text>
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
    padding: 100,
    backgroundColor: 'lightblue',
    borderRadius: 50,
  },
  buttontext: {
    margin: 10,
    fontSize: 20,
  },
});