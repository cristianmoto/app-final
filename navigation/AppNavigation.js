import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GlobeAltIcon, CalendarDaysIcon } from 'react-native-heroicons/solid';
import { View, StyleSheet } from 'react-native';
import { tailwind } from 'nativewind';
import HomeScreen from '../screens/HomeScreen';
import AlertScreen from '../screens/AlertScreen'

const Tab = createBottomTabNavigator();

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        activeTintColor: "white",
        inactiveTintColor: "#FFF",
       
        tabBarStyle: {
          backgroundColor:'transparent',
          borderTopWidth:1,
          position: 'absolute',
          elevation: 0 
          
        },
       
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <GlobeAltIcon size="25" color="white" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Alerta"
        options={{
          tabBarIcon: ({ color, size }) => (
            <CalendarDaysIcon size="25" color="white" />
          ),
        }}
        component={AlertScreen}
        
      />
    </Tab.Navigator>
  );
};


export default MyTabNavigator;
