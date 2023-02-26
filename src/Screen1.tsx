import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAccount} from './zustand';

export default function Screen1() {
  const {name, age, address, changeName, loading, getListPost, listPost} =
    useAccount();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>My Name is {name}</Text>
        <Text>I am {age} years old</Text>
        <Text>I live in {address}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => changeName('Lorem Ipsum')}>
          <Text>Change name to Lorem ipsum</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Change name baco to Charisma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2')}
          style={styles.button}>
          <Text>Navigate to screen 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => getListPost()}>
          <Text>Get List Data</Text>
        </TouchableOpacity>

        {listPost.map(value => {
          return (
            <View style={{marginTop: 10}} key={value.id}>
              <Text>Title: {value.title}</Text>
              <Text>Body: {value.body}</Text>
            </View>
          );
        })}

        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} color="orange" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  button: {
    padding: 15,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loading: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
