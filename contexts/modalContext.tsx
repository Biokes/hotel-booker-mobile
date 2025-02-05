import {createContext} from "react";

const ModalContext = createContext({isOpen:false, toggle:()=>{}});
export default ModalContext;