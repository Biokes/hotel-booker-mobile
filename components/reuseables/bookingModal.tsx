import {Modal, View} from "react-native";
import {useContext} from "react";
import ModalContext from "@/contexts/modalContext";

interface BookingModalProps {
    modalContent: React.ReactNode;
  }
  
  export default function BookingModal({ modalContent }: BookingModalProps) {
    const {isOpen} = useContext(ModalContext)
    return (
        <Modal animationType={"slide"} transparent={true} visible={isOpen}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {modalContent}
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

    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(205, 231, 255, 0.5)",
      },
      modalContent: {
        width: "90%",
        height: "60%",
        backgroundColor: "#9f9e96",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        padding: 20,
        alignItems: "center",
      },
}