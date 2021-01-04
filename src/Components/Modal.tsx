import React, {useContext} from 'react'
import ClickAwayListener from 'react-click-away-listener';
import ModalCardWrapper from './ModalCardWrapper';
import { AppContext } from './Page';

const Modal: React.FC = () => {
    const {state, setState} = useContext(AppContext)
    
    const handleClickAway = () => {
        setState({...state, showModal: false})
    };
        return (
            <div className="absolute w-full h-screen top-0 left-0 bg-white z-100 flex items-center justify-center select-none">
                <ClickAwayListener className="w-full h-full" onClickAway={handleClickAway}>
                    <ModalCardWrapper />
                </ClickAwayListener>
            </div>
        );
    }


export default Modal