import React, { useState } from 'react';
import ModalContext from "@/contexts/modalContext";
const ModalProvider = ({ children }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const toggleModal = () => {
        setOpen(!isOpen);
    };

    const contextValue = {isOpen, toggleModal,};

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            <BookingModal/>
        </ModalContext.Provider>
    );
};

export default ModalProvider;