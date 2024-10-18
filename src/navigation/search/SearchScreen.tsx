import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {randomColor} from '../../utils/randomColor';

const SearchScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('SearchStack', {
      screen: 'Detail',
    });
  };
  return (
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <Pressable onPress={handlePress}>
        <Text style={[styles.text, {color: 'blue'}]}>Go to detail</Text>
      </Pressable>
    </View>
  );
};

export default SearchScreen;

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
