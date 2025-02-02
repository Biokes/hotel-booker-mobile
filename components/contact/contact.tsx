import {View, Text, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import Animated, {useAnimatedRef} from "react-native-reanimated"
import Navbar from "@/components/reuseables/navbar";
import Footer from "@/components/reuseables/footer";
import {ThemedText} from "@/components/ThemedText";
export default function Contact() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <SafeAreaView>
            <Animated.ScrollView ref={scrollRef}>
                <View>
                    <Navbar/>
                    <ImageBackground src={""}>
                        <Text>Contacts</Text>
                    </ImageBackground>
                    <View>
                        <ThemedText>Get in touch</ThemedText>
                        <Text>
                            we are available 24/7 by fax, e-mail or by phone. You can also use
                            our quick contact form to ask a question about our services.
                            We would be pleased to answer your questions.
                        </Text>
                    </View>
                    {/*<View>
                    inputs for name, phone number, message to be passed, email,
                    buton to send
                    </View>*/}
                    <Footer/>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}
