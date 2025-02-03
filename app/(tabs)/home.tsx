import HomeComponent from "@/components/home/homeComponent";
import {SafeAreaView, ScrollView} from "react-native";
import {Stack} from "expo-router";

export default function DefaultScreen(){

    return (
        <SafeAreaView>
            <ScrollView>
                <HomeComponent/>
            </ScrollView>
        </SafeAreaView>
    )
}