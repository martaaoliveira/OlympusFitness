import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground } from 'react-native';

import backgroundImage from './assets/images/background.jpg';
import styles from './styles';
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from './constants/constants';

export default function BackgroundAnimation() {
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(initialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimationX = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  // Adjust OUTPUT_RANGE_START to move the image higher (negative value)
  const adjustedOutputRangeStart = -300; // Modify this value as needed

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    <AnimatedImage
      resizeMode="repeat"
      style={[
        styles.background,
        {
          transform: [
            {
              translateX: translateAnimationX,
            },
            {
              translateY: adjustedOutputRangeStart, // Adjusted translateY value
            },
          ],
        },
      ]}
      source={backgroundImage}
    />
  );
}
