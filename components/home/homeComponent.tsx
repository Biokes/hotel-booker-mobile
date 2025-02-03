import {View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Animated, Image} from 'react-native'
import React from 'react'
import Navbar from "@/components/reuseables/navbar";
import {RoomData} from "@/types/interfaces";
import Footer from "@/components/reuseables/footer";
import FlatList = Animated.FlatList;

const {width, height} = Dimensions.get('screen')
const styles= StyleSheet.create({
    background:{
        display:'flex',
        flexDirection:'column',
        height:230,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingInline:15,
        paddingBlock:20
    },
    BigText:{
        fontSize:20,
        fontWeight:"bold",
        color:'#ffffff',
    },
    smallText:{
        fontSize:13,
        fontWeight:"medium",
        color:'#ffffff',
    },
    mediumText:{
        fontSize: 15,
        fontWeight:'medium',
        color:'#ffffff'
    },
    overlay:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
    },
    flatList:{
        display: "flex",
        flexDirection:'column',
        gap:10,
    },
    card:{
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        width:200,
        height:150,
        borderRadius:25,
    },
    cardContainer:{
        overflow:'hidden',
        marginInline:5,
        width: 300
    }
})
export default function HomeComponent() {
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
        <ScrollView>
            <Navbar/>
            <ImageBackground source={{uri:'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'}}
                resizeMode={"cover"} blurRadius={4} style={styles.background}
            >
                <View style={styles.overlay}>
                    <Text style={styles.BigText}>Relax & unwind of our spa treatments</Text>
                    <Text style={styles.smallText}>Experience the luxurious level</Text>
                    <Text style={styles.mediumText}>of our spa treatments</Text>
                </View>
            </ImageBackground>
            <Text style={{fontSize:20,fontWeight:"bold", margin:4,}}>Hottest</Text>
            <FlatList data={hotels} horizontal showsHorizontalScrollIndicator={true}
                renderItem={({item, index}) => (
                    <View style={styles.cardContainer}>
                        <ImageBackground index={index} style={styles.card} source={{uri:item.url}} resizeMode={"cover"} blurRadius={1}>
                            <View style={styles.overlay}>
                                <Text>{item.location}</Text>
                                <Text>{item.description}</Text>
                                <Text>{item.price}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                )}
            />
            />
            <Footer/>
        </ScrollView>
    )
}
