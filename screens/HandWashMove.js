import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default class HandWashMove extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 250,
            height: 300,
          }}
          source={require('../assets/21163-washing-hands.json')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    flex: 1,
  },
});