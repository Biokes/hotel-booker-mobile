import { SafeAreaView, Text } from 'react-native';
import Animated from "react-native-reanimated";
import React, {useContext} from 'react'
import {FadeInDown} from "react-native-reanimated";
import ModalContext from "@/contexts/modalContext";

export default function Navbar() {
    return (
        <SafeAreaView>
            <Animated.View entering={FadeInDown.duration(300).springify()}
                style={{
                    flex: 1, height: 40, flexDirection: 'row', paddingHorizontal: 8,
                    justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#DCD6D3'
                }}>
                <Text style={{fontSize: 26, color: 'gray', fontWeight: 'bold'}}>Royal Villas</Text>
            </Animated.View>
        </SafeAreaView>

    )
}