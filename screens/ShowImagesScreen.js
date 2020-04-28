import React, { Component } from "react";
import { StyleSheet, Animated } from "react-native";


function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

class ImageLoader extends Component {
  state = {
    fadeIn: new Animated.Value(0),
    fadeOut: new Animated.Value(1),
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 500,
    }).start(() => this.fadeOut());
  };

  fadeOut = () => {
    wait(2000);
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.fadeIn}
        {...this.props}
        style={[
          {
            opacity: this.state.fadeIn,
            transform: [
              {
                scale: this.state.fadeIn.interpolate({
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

const images = [
  require("../assets/images/handwash_03.jpg"),
  require("../assets/images/handwash_04.jpg"),
  require("../assets/images/handwash_05.jpg"),
  require("../assets/images/handwash1_03.jpg"),
  require("../assets/images/handwash1_04.jpg"),
  require("../assets/images/handwash1_05.jpg"),
  require("../assets/images/handwash3_03.jpg"),
  require("../assets/images/handwash3_04.jpg"),
  require("../assets/images/handwash3_05.jpg"),
];

export default function ShowImagesScreen() {
  return (
    <ImageLoader
      style={styles.image}
      source={require("../assets/images/handwash_03.jpg")}
    />

    // <View>
    //   {...images.map((image) => (
    //     <ImageLoader key={image} source={{ uri: image }} style={styles.image} />
    //   ))}
    // </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignContent: "center",
    padding: 100,
    height: 100,
    width: 100,
  },
});
