import { View,Text,StyleSheet } from "react-native";

export default function Modal() { 
    return (
        <View>
            <Text>Subscribed successfully</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
