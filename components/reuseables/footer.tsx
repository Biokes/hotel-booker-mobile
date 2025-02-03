import React, { useState, useEffect, useRef } from 'react';
import {Animated, Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {FadeInDown} from "react-native-reanimated";

export default function Footer() {
    const [email, setEmail] = useState<string>('');
    const [isShowingModal, showModal] = useState<boolean>(false);
    const messageRef = useRef<any>(null);

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

    const handleSubmit = () => {
        showModal(true);
        setEmail('');
    };

    return (
        <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.container}>
            <Animated.View entering={FadeInDown..delay(100).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Opening Hours</Text>
                <Text>Weekdays: 8:00–20:00</Text>
                <Text>Weekends: 9:00–18:00</Text>
                <Text>© 2019 Royal Villas. All Rights Reserved.</Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Address</Text>
                <Text>6036 Richmond hwy., Alexandria, VA, 2230</Text>
                <Text>Call Us: +1 (409) 987–5874</Text>
                <Text>Email: mainMail@email.com</Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(300).duration(700).springify()} style={styles.section}>
                <Text style={styles.headingText}>Join our newsletter</Text>
                <View>
                    <TextInput
                        value={email}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        placeholderTextColor={'gray'}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <TouchableOpacity
                        className={'w-full bg-sky-400 p-3 rounded-2xl mb-3'}
                        onPress={handleSubmit}
                        disabled={!isValid(email)}
                    >
                        <Text className={'text-xl font-bold text-white text-center'}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            {/*<Animated.View>*/}

            {/*</Animated.View>*/}
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
        padding:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000000'
    },
    headingText:{
        fontSize:25
    }
});
