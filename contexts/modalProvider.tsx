import React, { ReactNode, useState } from 'react';
import ModalContext from "@/contexts/modalContext";
import BookingModal from "@/components/reuseables/bookingModal";
const ModalProvider = ({ children }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [modalContent, setContent] = useState<ReactNode>(<></>)
    const toggleModal = () => {
        setOpen(!isOpen);
    };
    const setModalContent = (props:ReactNode) => { 
        setContent(props)
    }

    return (
        <ModalContext.Provider value={{isOpen: isOpen,toggle:toggleModal,setModalContent:setModalContent}}>
            {children}
            {isOpen && <BookingModal modalContent={ modalContent} />}
        </ModalContext.Provider>
    );
};

export default ModalProvider;