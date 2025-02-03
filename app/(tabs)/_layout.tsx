import {Tabs} from 'expo-router'
import {View} from "react-native";
import {Ionicons} from "@expo/vector-icons";


export default function TabsLayout(){
    return (
        <Tabs screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#ffd33d',
            headerStyle:{backgroundColor:"#25292e"},
            tabStyle:{backgroundColor:"#25292e"},
            headerShadowVisible:false

        }}>
            <Tabs.Screen name={'home'}
                         options={{headerShown:false, title:'Home',tabBarIcon:({focused, color})=>(<Ionicons
                                 name={focused? "home-sharp":"home-outline"} color={color} size={24}/>)}}/>
            <Tabs.Screen name={'about'}
                         options={{headerShown:false, title:'About',
                             tabBarIcon:({focused, color})=>(
                                 <Ionicons name={focused? "information-circle":"information-circle-outline"} color={color} size={24}/>)}}/>
            <Tabs.Screen name={'contact'}
                         options={{headerShown:false, title:'contact',
                             tabBarIcon:({focused, color})=>(
                                 <Ionicons name={focused? "information-circle":"information-circle-outline"} color={color} size={24}/>)}}/>
        </Tabs>
    )
}