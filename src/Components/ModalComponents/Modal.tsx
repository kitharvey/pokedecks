import React, {useContext} from 'react'
import ModalCardWrapper from './ModalCardWrapper';
import { AppContext } from '../../Page/Page';
import { useHistory } from "react-router-dom";

const Modal: React.FC = () => {
    const history = useHistory();
    const {setStateModal} = useContext(AppContext)
    
    const handleCloseModal = () => {
        setStateModal(false)
        localStorage.setItem('stateModal', 'false')
        history.push("/")
    };
        return (
            <div className="w-full h-max min-h-9/10-screen relative z-100 flex flex-col items-center justify-center">
                <div className="h-8 w-8 ml-auto mr-4 my-4 lg:mr-24 cursor-pointer transition duration-100 ease-in-out hover:opacity-50" onClick={handleCloseModal} >
                    <svg viewBox="0 0 40 40">
                        <path stroke="#000000" strokeWidth={4} d="M 5,5 L 35,35 M 35,5 L 5,35" />
                    </svg>
                </div>
                    <ModalCardWrapper />
            </div>
        );
    }


export default Modal