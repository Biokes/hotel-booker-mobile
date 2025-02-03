import {Tabs} from 'expo-router'
import {View} from "react-native";

const TabIcon =({focused,icon,title}:{focused:boolean,icon:any,title:string})=>(
    <View className={'flex-1 mt-3 flex flex-col items-center'}>

    </View>
)
export default ()=>{
    return (
        <Tabs screenOptions={{tabBarShowLabel:false, tabBarStyle:{
            backgroundColor:'#a6a2a2',position:'absolute',minHeight:70,borderTopColor:'#ceb6a9',borderTopWidth:1
        }
        }}>
            <Tabs.Screen name={'home'} options={{headerShown:false, title:'Home',tabBarIcon:()=>(<View><Text>Home</Text></View>)}}/>
            <Tabs.Screen name={'about'} options={{headerShown:false, title:'About',tabBarIcon:()=>(<View><Text>About</Text></View>)}}/>
            <Tabs.Screen name={'contact'} options={{headerShown:false, title:'contact',tabBarIcon:()=>(<View><Text>Contact</Text></View>)}}/>
            <Tabs.Screen name={'+not-found'}/>
        </Tabs>
    )
}