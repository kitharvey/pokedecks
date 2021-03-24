import React from 'react'
import ModalCardWrapper from './ModalCardWrapper';
import {RiCloseCircleFill} from 'react-icons/ri'
import { useAppDispatch } from '../../reduxStore/hooks';
import { setModalShow } from '../../reduxStore/modalSlice';
const Modal: React.FC = () => {
    const dispatch = useAppDispatch()
    const handleCloseModal = () => {
        dispatch(setModalShow(false))
    };
        return (
            <div className="w-full h-full absolute z-100 flex flex-col items-center justify-center">
                <div className="h-8 w-8 absolute top-6 right-7 cursor-pointer transition duration-100 ease-in-out hover:opacity-50 text-4xl font-black" onClick={handleCloseModal} >
                    <RiCloseCircleFill />
                </div>
                <ModalCardWrapper />
            </div>
        );
    }


export default Modal