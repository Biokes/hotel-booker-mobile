import {Stack, Tabs} from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import Foundation from '@expo/vector-icons/Foundation';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, tabBarButton: HapticTab, tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({ios: {position: 'absolute',}, default: {},}),}}
    >
        <Stack.Screen name={'home'} options={{title: 'Index', tabBarIcon: ({ color }) => <Ionicons size={28} name="house.fill" color={color} />}}/>
        <Stack.Screen name={'about'} options={{title: 'Index', tabBarIcon: ({ color }) => <Foundation size={28} name="info.fill" color={color} />}}/>
        <Stack.Screen name={'contact'} options={{title: 'Index', tabBarIcon: ({ color }) =><AntDesign name="contacts" size={28} color={color}/>}}/>
    </Stack>
  );
}
