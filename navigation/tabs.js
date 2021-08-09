import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchScreen from '../screens/SearchScreen'
import MountainScreen from '../screens/MountainScreen'
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'

//theme
import * as theme from '../assets/theme/theme'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    height: 60,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteScreen}
            />

            <Tab.Screen
                name="Mountain"
                options={{
                    headerStyle: {
                        backgroundColor: theme.primaryBackgroundColor,
                    },
                    headerTitleStyle: {
                        color: theme.primaryText
                    },
                    headerTintColor: theme.primaryText,
                }}
                component={MountainScreen}
            />

        </Tab.Navigator >
    )
}

export default Tabs