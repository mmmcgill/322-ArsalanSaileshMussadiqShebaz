import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OptionsScreen() {
    return(
    <View style={styles.container}>

        <TouchableOpacity>
          <View style={styles.buttoncont}>           
           <Text style={styles.buttontext}>Credits</Text>
          </View>
        </TouchableOpacity>
        
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 100,
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
      padding: 12,
      backgroundColor: 'lightblue',
      borderRadius: 50,
    },
    buttontext: {
      margin: 10,
      fontSize: 20,
    },
});