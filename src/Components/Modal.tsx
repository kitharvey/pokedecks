import React from 'react'
import ModalCardWrapper from './ModalCardWrapper';

const Modal: React.FC = () => {
        return (
            <div className="absolute w-full h-screen top-0 left-0 bg-transparent z-100 backDrop flex items-center justify-center select-none">
                 <ModalCardWrapper />
            </div>
        );
    }


export default Modal