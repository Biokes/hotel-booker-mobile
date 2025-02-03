import {Modal, Pressable, View} from "react-native";
import {Fontisto} from "@expo/vector-icons";

export default function BookingModal({modalProps}:{isOpen: boolean, toggle:()=>void}){
    return (
        <Modal animationType={"slide"} transparent={true} visble={modalProps.isOpen}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text>Search</Text>
                    <Pressable onPress={modalProps.toggle}>
                        <Fontisto name="search" size={24} color="black" />
                    </Pressable>
                </View>

            </View>
        </Modal>
    )
}
const styles={
    modalContent: {
        height:'60%',
        width:"90%",
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position:'absolute',
        backgroundColor:'#9f9e96',
        bottom:0,
        marginBlock:"5%"
    },
    titleContainer:{
        height:'40%',
        backgroundColor:"#524b4b",
        flexDirection:'row',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between'

    }
}