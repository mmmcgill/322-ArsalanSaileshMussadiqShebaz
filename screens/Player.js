import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const TRACKS = [
  {
    title: 'Upbeat Party',
    artist: 'Scott Holmes',
    uri: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3",
  },
  {
    title: 'Annalise',
    artist: 'Derek Clagg',
    uri: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/Solar/Derek_Clegg_-_12_-_Annalise.mp3',
  },
  {
    title: 'Vuelve a la Luz',
    artist: 'Silvia de Alegra',
    uri: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Silva_de_Alegria/Primavera_en_la_Guerra_del_Sonido/Silva_de_Alegria_-_06_-_Vuelve_a_la_Luz.mp3',
  },
];

export default class Player extends Component {
  state = {
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
        shouldPlay: isPlaying,
        volume
      }

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlayStatusUpdate)
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
    } catch (e) {
      console.log(e)
    }
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
       <TouchableOpacity style={styles.button} onPress={this.handlePlayPause}>
         {this.state.isPlaying ? (
         <Ionicons name='ios-pause' size={100} color='#444' />
         ) : (
         <Ionicons name='ios-play' size={100} color='#444' />
         )}
       </TouchableOpacity>
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