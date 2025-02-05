import {Modal, Pressable, View,Text} from "react-native";
import {useContext} from "react";
import ModalContext from "@/contexts/modalContext";

interface BookingModalProps {
    modalContent: React.ReactNode;
  }
  
  export default function BookingModal({ modalContent }: BookingModalProps) {
    const {isOpen} = useContext(ModalContext)
    return (
        <Modal animationType={"slide"} transparent={true} visble={isOpen}>
            {modalContent }
        </Modal>
    )
}
// <Text>Search</Text>
{/* <Pressable onPress={toggle}>
<Fontisto name="search" size={24} color="black" />
</Pressable>
</View> */}
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