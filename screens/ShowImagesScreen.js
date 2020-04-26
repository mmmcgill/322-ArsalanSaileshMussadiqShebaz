import React, { Component } from "react";
import { StyleSheet, Text, View, Linking, Image, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { render } from "react-dom";

const images = [
  require("../assets/images/cdc-logo.png"),
  require("../assets/images/icon.png"),
  require("../assets/images/robot-prod.png"),
  require("../assets/images/robot-dev.png"),
  require("../assets/images/splash.png"),
];

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default function ShowImagesScreen() {
  return (
    <>
      {images.map((img) => (
        <ImageLoader style={styles.image} source={img} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
