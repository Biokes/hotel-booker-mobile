import {SafeAreaView, Text, View} from 'react-native'
import React from 'react'
import Navbar from "@/components/reuseables/navbar";
import {ThemedText} from "@/components/ThemedText";
import Animated from 'react-native-reanimated'
import Footer from "@/components/reuseables/footer";
import {Stack} from "expo-router";


const hotelInfo = [
    {header: "Single room",text:"each room has its own unique decor and arrangement", image:""},
    {header: "Double room",text:"each room has its own unique decor and arrangement", image:""},
    {header: "Twim room",text:"each room has its own unique decor and arrangement", image:""},
    {header: "Family room",text:"each room has its own unique decor and arrangement", image:""},
    {header: "Executive suite",text:"each room has its own unique decor and arrangement", image:""},
    {header: "VIP suites",text:"each room has its own unique decor and arrangement", image:""},
]
const comments = [
    {
        name:'Julie Adams',
        job:'BabySitter',
        comment:`no better way to rediscover the joy in everyday living 
                than that at royal villas. Second time visit and experience was 
                just as powerful as the first.They exceeded all my expectations
                 again, this is the first place to visit if you want a better service.`,
        header:'wonderful and friendly environment'
    },
    {
        name:'Sam Brown',
        job:'Journalist',
        comment:`Got a royal villa certificate as a gift a few months ago,and i really 
                 had a fantastic spa experience there.i arrived early & was greeted warmly
                 at the door,Surprisingly, i didn't have to wait .Everything was perfect. 
                 Highly recommend this amazing place to everybody.`,
        header: "Great atmosphere and level of customer"
    },
    {
        name:'Jane Neddery',
        job:'Office manager',
        comment:`The moment you walk out of the airport, you are greeted 
                 with a warm welcome from royal villas staff member, and 
                 it doesn't stop.the staff truly seems to love their job 
                 and want to make sure your visit and stay is everything `,
        header:'perfect resort and spa services'
    },
]
export default function Contact(){
    return (
        <Stack.Screen options={{headerShown:false}}>
            <SafeAreaView>
                <Animated.ScrollView>
                    <Navbar/>
                    <Text>About us</Text>
                    <Image source={""}/>
                    <View>
                        <ThemedText lightColor={'white'} darkColor={'black'}>A few word from us</ThemedText>
                        <Text>
                            Tired of your daily routine? Seeking for a place to stay
                            and rest with your family? You are in the right place! Our
                            spa resort and hotel provides luxury and historic accommodations
                            for travelers. It combines modern style and amenities with
                            traditional values.
                        </Text>
                        <Text>
                            All rooms are equipped with air conditioners and LCD TVs.
                            Free WI-FI service is available throughout the territory of
                            the hotel. Our restaurant food and meals from world cuisines
                            unite people connecting history and traditions. Experience our
                            warm hospitality, high quality of service and exceptional
                            comfort! Make a reservation for your dream vacation today!
                        </Text>
                    </View>
                    <View>
                        <Text>Rooms and Suites</Text>
                        <Text>
                            Royal Villas offers the finest accommodations with unique designs
                            that provide both a luxurious and relaxing environment. {"\n"}
                            Specially selected fabrics and finishes vary from room to room,
                            offering guests a variety of beautiful and unique atmospheres to select from.
                        </Text>
                    </View>
                    {/*<Comments/>*/}
                    <Footer/>
                </Animated.ScrollView>
            </SafeAreaView>
        </Stack.Screen>
    )
}
