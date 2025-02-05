import {Modal, Pressable, View,Text} from "react-native";
import {Fontisto} from "@expo/vector-icons";
import {useContext} from "react";
import ModalContext from "@/contexts/modalContext";

export default function BookingModal(){
    const {isOpen,toggle} = useContext(ModalContext)
    return (
        <Modal animationType={"slide"} transparent={true} visble={isOpen}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text>Search</Text>
                    <Pressable onPress={toggle}>
                        <Fontisto name="search" size={24} color="black" />
                    </Pressable>
                </View>
                <View>

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