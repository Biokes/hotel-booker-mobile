import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline:4,
        boxShadow:'#4b4848'
    },
    hamburger: {
        display: "flex",
        gap:'10px',
        width:40,
        borderColor:"#000000",
        borderWidth:10
    },
    name:{
        fontSize: 12,
        fontWeight:"bold"
    }
})
export default styles