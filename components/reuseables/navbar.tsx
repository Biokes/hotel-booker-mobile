import {View, Text} from 'react-native'
import React from 'react'
import styles from '@/styles/style'
export default function Navbar() {
    return (
        <View  style={styles.navbar}>
            <Text style={styles.name}>Royal Villas</Text>
            <Text>Book now</Text>
        </View>
    )
}
