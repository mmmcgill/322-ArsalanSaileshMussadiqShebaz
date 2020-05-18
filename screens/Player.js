import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const musicURI1 = Asset.fromModule(require('../assets/song1.mp3')).uri;
const musicURI2 = Asset.fromModule(require('../assets/song2.mp3')).uri;
const musicURI3 = Asset.fromModule(require('../assets/song3.mp3')).uri;

const TRACKS = [
  {
    title: 'Something Elated',
    artist: 'Broke for Free',
    uri: musicURI1
  },
  {
    title: 'Green Lights',
    artist: 'Jahzzar',
    uri: musicURI2
  },
  {
    title: 'Siesta',
    artist: 'Jahzzar',
    uri: musicURI3
  },
];

export default class Player extends Component {
  state = {
   shouldPlay: false,
   isPlaying: false,
   playbackInstance: null,
   currentIndex: 0,
   volume: 1.0,
   isBuffering: false
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: true
      })
      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }
  async loadAudio() {
    const {currentIndex, isPlaying, volume} = this.state

    try {
      const playbackInstance = new Audio.Sound()
      const source = {
        uri: TRACKS[currentIndex].uri
      }

      const status = {
        shouldPlay: true,
        isPlaying:true,
        volume
      }

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlayStatusUpdate)
      await playbackInstance.loadAsync(source, status, true)
      this.setState({playbackInstance})
    } catch (e) {
      console.log(e)
    }
  }
  async componentWillUnmount() {
    const { playbackInstance } = this.state;
    await playbackInstance.pauseAsync();
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

    this.setState({
      isPlaying: !isPlaying
    })
  }
  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {TRACKS[currentIndex].title}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {TRACKS[currentIndex].artist}
        </Text>
      </View>
    ) : null
  }
  render() {
   return (
    <View style={styles.container}>
     <View style={styles.controls}>

     </View>
     {this.renderFileInfo()}
    </View>
   )
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  instructions: {
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
  trackInfo: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#444'
  },
  largeText: {
    fontSize: 22,
    textAlign: 'center'
  },
  smallText: {
    fontSize: 16,
    textAlign: 'center'
  },
  controls: {
    flexDirection: 'row',
  },
})