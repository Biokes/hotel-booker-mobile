import {createContext} from "react";

const ModalContext = createContext({ isOpen: false, toggle: () => { }, setModalContent: (element: React.ReactNode) => { } });
export default ModalContext;