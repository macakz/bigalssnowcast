import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import MountainScreen from './screens/MountainScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Mountain" component={MountainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
