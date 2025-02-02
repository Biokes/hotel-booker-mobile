import HomeComponent from "@/components/home/homeComponent";
import {SafeAreaView, ScrollView} from "react-native";

export default function DefaultScreen(){

    return (
        <SafeAreaView>
            <ScrollView>
                <HomeComponent/>
            </ScrollView>
        </SafeAreaView>
    )
}