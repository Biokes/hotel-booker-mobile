import React, { useState } from 'react';
import ModalContext from "@/contexts/modalContext";
import BookingModal from "@/components/reuseables/bookingModal";
const ModalProvider = ({ children }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const toggleModal = () => {
        setOpen(!isOpen);
    };

    const contextValue = {isOpen, toggleModal,};

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            <BookingModal isOpen={isOpen} toggle={toggleModal}/>
        </ModalContext.Provider>
    );
};

export default ModalProvider;