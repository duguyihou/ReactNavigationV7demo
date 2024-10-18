import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {randomColor} from '../../utils/randomColor';

const DetailScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('SearchStack', {
      screen: 'Detail',
    });
  };
  return (
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <Text style={styles.text}>Home Detail Screen</Text>
      <Pressable onPress={handlePress}>
        <Text style={[styles.text, {color: 'blue'}]}>Go to Search Detail</Text>
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
