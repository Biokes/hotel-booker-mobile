import React from "react";

const ModalContext = React.createContext({
        isOpen: false,
        toggleModal: () => {},
    }
);
export default ModalContext;