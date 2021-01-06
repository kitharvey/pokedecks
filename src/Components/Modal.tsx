import React, {useContext} from 'react'
import ModalCardWrapper from './ModalCardWrapper';
import { AppContext } from './Page';

const Modal: React.FC = () => {
    const {state, setState} = useContext(AppContext)
    
    const handleClickAway = () => {
        setState({...state, showModal: false})
    };
        return (
            <div className="fixed w-full h-screen top-0 left-0 bg-white z-100 flex items-center justify-center select-none">
                <div className="h-10 w-10 fixed z-100 top-20 right-5 cursor-pointer transition duration-100 ease-in-out hover:opacity-50" onClick={handleClickAway} >
                    <svg viewBox="0 0 40 40">
                        <path stroke="#000000" strokeWidth={4} d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </div>
                    <ModalCardWrapper />
            </div>
        );
    }


export default Modal