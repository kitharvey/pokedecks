import React from 'react'
import ModalCardWrapper from './ModalCardWrapper';
import { useHistory } from "react-router-dom";
import {GrClose} from 'react-icons/gr'
const Modal: React.FC = () => {
    const history = useHistory();  
    const handleCloseModal = () => {
        history.push("/pokemons")
    };
        return (
            <div className="w-full h-max min-h-9/10-screen relative z-100 flex flex-col items-center justify-center">
                <div className="h-8 w-8 ml-auto mr-4 my-4 lg:mr-24 cursor-pointer transition duration-100 ease-in-out hover:opacity-50 text-4xl font-black" onClick={handleCloseModal} >
                    <GrClose />
                </div>
                <ModalCardWrapper />
            </div>
        );
    }


export default Modal