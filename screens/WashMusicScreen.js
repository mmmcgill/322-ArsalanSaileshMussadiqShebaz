import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Player from './Player';
import ImageCara from './ImageCara';
import { LinearGradient } from 'expo-linear-gradient';


let images = [
  require('../assets/images/1.jpg'),
  require('../assets/images/2.jpg'),
  require('../assets/images/3.jpg'),
  require('../assets/images/4.jpg'),
  require('../assets/images/5.jpg'),
  require('../assets/images/6.jpg'),
  require('../assets/images/7.jpg'),
  require('../assets/images/8.jpg'),
  require('../assets/images/9.jpg'),
];

export default function WashMusicScreen() {
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
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  icara: {
    paddingTop: 100,
  },
  player: {
    paddingTop: 20,
  },
});
