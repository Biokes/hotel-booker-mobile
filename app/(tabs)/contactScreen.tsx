import {StyleSheet, View} from 'react-native';
import Contact from "@/components/contact/contact";
import {Stack} from "expo-router";
export default function ContactScreen() {
  return (
      <Stack.Screen options={{headerShown:false}}>
        <Contact/>
      </Stack.Screen>
  );
}
