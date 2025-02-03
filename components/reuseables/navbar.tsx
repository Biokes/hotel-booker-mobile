import {Animated, Pressable, Text} from 'react-native'
import React, {useContext} from 'react'
import {FadeInDown} from "react-native-reanimated";
import ModalContext from "@/contexts/modalContext";

export default function Navbar() {
    const {toggleModal} = useContext(ModalContext)
    return (
        <Animated.View entering={FadeInDown.duration(300).springify()}
                       style={{flex:1, height: 20,flexDirection:'row', paddingHorizontal:8,justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Royal Villas</Text>
            <Pressable style={{backgroundColor:'#000', borderRadius:5, alignItems: 'center', justifyContent: 'center',}} onPress={()=>toggleModal()}>
                <Text style={{fontSize: 15, color: 'white', fontWeight:'normal'}}>Book now</Text>
            </Pressable>
        </Animated.View>
    )
}
