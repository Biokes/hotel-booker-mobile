import {View, Text, StyleSheet, ImageBackground, TouchableOpacity,ScrollView} from 'react-native'
import React, { useContext } from 'react'
import Animated from 'react-native-reanimated';
import Navbar from "@/components/reuseables/navbar";
import {RoomData} from "@/types/interfaces";
import Footer from "@/components/reuseables/footer";
import {FadeInDown} from "react-native-reanimated";
import ModalContext from "@/contexts/modalContext";

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flexDirection: 'column',
        height: 230,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingInline: 15,
        paddingBlock: 20
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
        color: '#ffffff',
    },
    mediumText: {
        fontSize: 15,
        fontWeight: 'medium',
        color: '#ffffff'
    },
    overlay: {
        backgroundColor: 'rgba(58, 58, 58, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    flatList: {
        display: "flex",
        flexDirection: 'column',
        gap: 10,
    },
    card: {
        width: 380,
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center'
    },
    cardContainer: {
        // overflow: 'hidden',
        // marginInline: 5,
        width: 400,
        height: 200,
        borderRadius:10
    },
    hotelsText: {
        backgroundColor: 'rgba(58, 58, 58, 0.8)',
        width: '80%',
        paddingInline: 15,
        borderRadius: 10,
        paddingBlock:10
    },
    button: {
        padding: 3,
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        height: 30
    },
    slider: {
        width:'95%'
    }
})
export default function HomeComponent() {
    const { toggle} = useContext(ModalContext)
    const hotels : RoomData[] = [
        {
            location :'USA',
            url: 'https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU=',
            price: "$128.50",
            description: "A room of luxurious comfort in New York City"
        },
        {
            url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2016-09/24/full/1474661181-3127.jpg',
            location:'india',
            price: "IDR 3,000,000",
            description: "A vacation paradise with stunning amenities in Bali"
        },
        {
            url: 'https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/27/2023/07/11061357/Luxury-Room-2.jpg',
            location:'uae',
            price: "AED 1,285.00",
            description: "A high-end hotel experience in Dubai with skyline views"
        },
        {
            url: 'https://www.mustgo.com/wp-content/uploads/2018/04/shangri-la-paris-luxury-hotel.jpg',
            price: "€500.00",
            location:'paris',
            description: "A premium luxury suite for ultimate relaxation in Paris"
        },
        {
            url: 'https://www.mustgo.com/wp-content/uploads/2018/04/shangri-la-paris-luxury-hotel.jpg',
            location:'australia',
            price: "AUD 300.00",
            description: "A beachfront villa in the stunning Whitsundays, Australia"
        },
        {
            url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/7c/1d/9e/exterior.jpg?w=700&h=-1&s=1',
            price: "JPY 15,000",
            description: "A secluded mountain retreat in the Japanese Alps",
            location: 'Japan'
        }
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <Animated.View entering={FadeInDown.duration(100).springify()}>
            <Navbar/>
            <ImageBackground source={{uri:'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'}}
                resizeMode={"cover"} blurRadius={4} style={styles.background}
            >
                <Animated.View entering={FadeInDown.delay(200).duration(100).springify()} style={styles.overlay}>
                    <Text style={styles.BigText}>Relax & unwind of our spa treatments</Text>
                    <Text style={styles.smallText}>Experience the luxurious level</Text>
                    <Text style={styles.mediumText}>of our spa treatments</Text>
                </Animated.View>
            </ImageBackground>
            <View style={{paddingBlock:10,justifyContent:"center",alignItems:'center',gap:20,backgroundColor:'#DCD6D3', borderRadius:5}}>
                <Text style={{fontWeight:700, fontSize:20, paddingInline: 7, textAlign:'center'}}>
                    Luxury hotel that will let you step into celebrity’s slippers.
                </Text>
                <TouchableOpacity style={styles.button} onPress={toggle}>
                    <Text style={{fontSize:17,textTransform:"capitalize", fontWeight:"bold"}}>Book a room </Text>
                </TouchableOpacity>
                <Animated.FlatList style={styles.slider} entering={FadeInDown.delay(300).duration(100).springify()} data={hotels} horizontal showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Animated.View entering={FadeInDown.delay(400).duration(100).springify()} style={styles.cardContainer}>
                        <ImageBackground key={index} style={styles.card} source={{uri:item.url}} resizeMode={"cover"} blurRadius={1}>
                            <View style={styles.hotelsText}>
                                <Text style={styles.BigText}>{item.location}</Text>
                                <Text style={styles.smallText} numberOfLines={1}>{item.description}</Text>
                                <Text style={styles.smallText}>{item.price}</Text>
                            </View>
                        </ImageBackground>
                    </Animated.View>
                )}
            />
            </View>
            <Footer/>
        </Animated.View>
        </ScrollView>
    )
}
