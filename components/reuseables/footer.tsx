import React, { useState, useEffect, useRef } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Footer() {
    const [email, setEmail] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [isShowingModal, showModal] = useState<boolean>(false);
    const messageRef = useRef<any>(null);

    useEffect(() => {
        if (isShowingModal) {
            const timer = setTimeout(() => {
                showModal(false);
                setText('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isShowingModal]);

    const isValid = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = () => {
        setText('Subscribed successfully');
        showModal(true);
        setEmail('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.headingText}>Opening Hours</Text>
                <Text>Weekdays: 8:00–20:00</Text>
                <Text>Weekends: 9:00–18:00</Text>
                <Text>© 2019 Royal Villas. All Rights Reserved.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.headingText}>Address</Text>
                <Text>6036 Richmond hwy., Alexandria, VA, 2230</Text>
                <Text>Call Us: +1 (409) 987–5874</Text>
                <Text>Email: mainMail@email.com</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.headingText}>Join our newsletter</Text>
                <View>
                    <TextInput
                        value={email}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        // style={styles.input}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <TouchableOpacity
                        // style={[styles.button, !isValid(email) && styles.buttonDisabled]}
                        onPress={handleSubmit}
                        disabled={!isValid(email)}
                    >
                        <Text>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
