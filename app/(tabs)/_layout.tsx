import {Tabs} from 'expo-router'
export default ()=>{
    return (
        <Tabs>
            <Tabs.Screen name={'about'}/>
            <Tabs.Screen name={'home'}/>
            <Tabs.Screen name={'contact'}/>
            <Tabs.Screen name={'+not-found'}/>
        </Tabs>
    )
}