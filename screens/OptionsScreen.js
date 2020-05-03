import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function OptionsScreen() {
    return(
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
        
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 100,
      zIndex : 100,
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