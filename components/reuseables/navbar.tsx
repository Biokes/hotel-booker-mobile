import {Animated, Text} from 'react-native'
import React from 'react'
import {FadeInDown} from "react-native-reanimated";
export default function Navbar() {
    return (
        <Animated.View entering={FadeInDown.duration(300).springify()} className={'flex justify-between px-3'}>
            <Text className={'text-4 text-white font-bold'}>Royal Villas</Text>
            <Text className={'text-4 text-white font-normal'}>Book now</Text>
        </Animated.View>
    )
}
