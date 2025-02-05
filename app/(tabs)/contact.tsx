import {View, Text, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import Animated, {useAnimatedRef} from "react-native-reanimated"
import Navbar from "@/components/reuseables/navbar";
import Footer from "@/components/reuseables/footer";
import ContactComponent from "@/components/contact/contact";
export default function Contact() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (<ContactComponent/>)
}
