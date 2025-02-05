import {View, Text, SafeAreaView, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import Animated, {useAnimatedRef} from "react-native-reanimated"
import Navbar from "@/components/reuseables/navbar";
import Footer from "@/components/reuseables/footer";
export default function ContactComponent() {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Navbar/>
                        <Text>Contacts</Text>
                    <View>
                        <Text>Get in touch</Text>
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
            </ScrollView>
        </SafeAreaView>
    )
}
