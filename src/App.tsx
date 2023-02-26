import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();

const Screen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});
