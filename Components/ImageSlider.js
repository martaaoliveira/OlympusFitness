import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Slideshow from "react-native-image-slider-show";

const { width, height } = Dimensions.get("window");

const image1 = require('../assets/images/PT.jpg');
const image2 = require('../assets/images/nutricao.jpg');
const image3 = require('../assets/images/osteopatia.jpg');
const image4 = require('../assets/images/regimelivre.jpg');
const image5 = require('../assets/images/aulasgrupo.jpg');

const dataSource = [
  {
    title: "Burger 1",
    caption: "Original Cheezy Meat",
    url: image5,
    navigateTo: "Serviços" // Specify the screen name to navigate to
  },
  {
    title: "Burger 2",
    caption: "100% Original Beef",
    url: image4,
    navigateTo: "Serviços" // Specify the screen name to navigate to
  },
  {
    title: "Burger 3",
    caption: "Mouthfull Of Happiness",
    url: image3,
    navigateTo: "Serviços" // Specify the screen name to navigate to
  },
  {
    title: "Burger 3",
    caption: "Mouthfull Of Happiness",
    url: image2,
    navigateTo: "Serviços" // Specify the screen name to navigate to
  },
  {
    title: "Burger 3",
    caption: "Mouthfull Of Happiness",
    url: image1,
    navigateTo: "Serviços" // Specify the screen name to navigate to
  }
];

const ImageSlider = ({ navigation }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition((prevPosition) => (prevPosition === dataSource.length - 1 ? 0 : prevPosition + 1));
    }, 3000);

    return () => clearInterval(toggle);
  }, []);

  const handleImageClick = (navigateTo) => {
    // Navigate to the specified screen when an image is clicked
    if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <View style={styles.sliderContainer}>
      <Slideshow
        dataSource={dataSource}
        position={position}
        onPositionChanged={setPosition}
        height={height * 0.5} // Use a percentage of the screen height
        width={width}  // Use the full screen width
        resizeMode="cover" // You can try different resizeMode values like 'cover', 'contain', or 'stretch'
        onPress={() => handleImageClick(dataSource[position].navigateTo)} // Handle image press
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {

  }
});

export default ImageSlider;
