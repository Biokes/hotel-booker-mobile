import ModalContext from '@/contexts/modalContext';
import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Dimensions} from 'react-native';
import {FadeInDown} from "react-native-reanimated";
import Animated from 'react-native-reanimated'

const {width} = Dimensions.get('window')

export default function Footer() {
    const [email, setEmail] = useState<string>('');
    const [isShowingModal, showModal] = useState<boolean>(false);
    const { setModalContent, toggle } = useContext(ModalContext)
    useEffect(() => {
        if (isShowingModal) {
            const timer = setTimeout(() => {
                showModal(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isShowingModal]);

    const isValid = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const subscribe = () => (
        <View style={styles.subscribe}>
            <Text style={styles.subText}>Subscribed successfully</Text>
        </View>
    )

    const handleSubmit = () => {
        setModalContent(subscribe())
        toggle();
        setEmail('');
    };

    return (
        <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.container}>
            <Animated.View entering={FadeInDown.delay(100).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Opening Hours</Text>
                <Text style={styles.smallText}>Weekdays: 8:00–20:00</Text>
                <Text style={styles.smallText}>Weekends: 9:00–18:00</Text>
                <Text style={styles.smallText}>© 2019 Royal Villas. All Rights Reserved.</Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Address</Text>
                <Text style={styles.smallText}>6036 Richmond hwy., Alexandria, VA, 2230</Text>
                <Text style={styles.smallText}>Call Us: +1 (409) 987–5874</Text>
                <Text style={styles.smallText}>Email: mainMail@email.com</Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(300).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Join our newsletter</Text>
                <View>
                    <TextInput
                        value={email}
                        style={{width:'100%',backgroundColor:"#AFABA8",borderWidth:1,padding:3,borderRadius:4, marginBottom:3}}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        onChangeText={(e) => setEmail(e)}
                    />
                    <TouchableOpacity style={{padding:4,width:80,backgroundColor:"#AFABA8",borderWidth:1,borderRadius:4}}
                        onPress={handleSubmit}
                        disabled={!isValid(email)}
                    >
                        <Text style={{fontSize:16, fontWeight:"600", color:'#000000',justifyContent:"center"}}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        paddingInline:25,
        paddingTop:30,
    },
    section: {
        display:'flex',
        flexDirection:'column',
        gap:4,
        backgroundColor:'#dadada',
        padding:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000000'
    },
    headingText:{
        fontSize:20
    },
    BigText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#ffffff',
        textTransform:'capitalize'
    },
    smallText: {
        fontSize: 13,
        fontWeight: "medium",
        color: '#000000',
    },
    mediumText: {
        fontSize: 15,
        fontWeight: 'medium',
        color: '#000000'
    },
    subscribe: {
        padding: 20,
        backgroundColor: '#DCD6D3',
        width: width * 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    subText: {
        fontSize: 15,
        color:'#2C2B2A'
    }
});
