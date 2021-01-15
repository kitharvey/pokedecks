import React, {useContext} from 'react'
import ModalCardWrapper from './ModalCardWrapper';
import { AppContext } from '../../Page/Page';
import { useHistory } from "react-router-dom";

const Modal: React.FC = () => {
    const history = useHistory();
    const {setStateModal} = useContext(AppContext)
    
    const handleCloseModal = () => {
        setStateModal(false)
        history.push("/")
    };
        return (
            <div className="w-full h-max min-h-screen  top-0 left-0 bg-white z-100 flex items-center justify-center h-9/10">
                <div className="h-10 w-10 fixed top-20 right-5 z-100 cursor-pointer transition duration-100 ease-in-out hover:opacity-50" onClick={handleCloseModal} >
                    <svg viewBox="0 0 40 40">
                        <path stroke="#000000" strokeWidth={4} d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </div>
                    <ModalCardWrapper />
            </div>
        );
    }


export default Modal