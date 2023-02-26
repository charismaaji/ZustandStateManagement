import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAccount} from './zustand';

export default function Screen2() {
  const {name} = useAccount();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{padding: 15}}>
      <Text>This is screen 2!</Text>
      <Text>My Name still {name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text>Change name to Lorem ipsum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style={styles.button}>
        <Text>Navigate to screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
