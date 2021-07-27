//React
import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-gesture-handler'

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import MountainScreen from './screens/MountainScreen'

//theme
import * as theme from './assets/theme/color'


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
      <StatusBar barStyle='light-content' />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryBackgroundColor,
        },
        headerTitleStyle: {
          color: theme.primaryText
        },
        headerTintColor: theme.primaryText,
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Mountain" component={MountainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
