import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {randomColor} from '../../utils/randomColor';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('HomeStack', {
      screen: 'Home',
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <Pressable onPress={handlePress}>
        <Text style={[styles.text, {color: 'blue'}]}>Go To Home</Text>
      </Pressable>
      <Pressable onPress={handleGoBack}>
        <Text style={[styles.text, {color: 'blue'}]}>Go back</Text>
      </Pressable>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
  },
});
