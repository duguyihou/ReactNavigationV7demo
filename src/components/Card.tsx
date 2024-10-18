import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import TurboImage from 'react-native-turbo-image';

type Props = {
  uri: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Card = ({uri}: Props) => {
  const navigation = useNavigation();
  const transX = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(transX.value),
        },
      ],
    };
  });

  const handleAnimationIn = () => {
    transX.value = 0.95;
  };

  const handleAnimationOut = () => {
    transX.value = 1;
  };

  const handlePress = () => {
    navigation.navigate('HomeStack', {
      screen: 'Detail',
    });
  };
  return (
    <AnimatedPressable
      onPressIn={handleAnimationIn}
      onPressOut={handleAnimationOut}
      onPress={handlePress}
      style={animatedStyles}>
      <TurboImage source={{uri}} style={styles.card} resizeMode="cover" />
    </AnimatedPressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 20,
    margin: 10,
  },
});
