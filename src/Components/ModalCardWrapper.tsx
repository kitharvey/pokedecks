import React, {useContext, useRef, useEffect, useState} from 'react'
import { AppContext } from './Page';
import Card from '../Deck/Card';
import ModalBackCard from './ModalBackCard';
import ReactCardFlip from 'react-card-flip';
import ClickAwayListener from 'react-click-away-listener';


const ModalCardWrapper: React.FC = () => {
    const {state, setState} = useContext(AppContext)
    const [isFlipped, setisFlipped] = useState<boolean>(false)
    
    const handleClickAway = () => {
        setState({...state, id: 0})
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="w-max h-auto flex">
                <ReactCardFlip isFlipped={isFlipped} infinite={true} >
                        <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}  >
                            <Card id={state.id} />
                        </div>
                
                        <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}>
                            <ModalBackCard />
                        </div>
                    </ReactCardFlip>
            </div>
        </ClickAwayListener>
    )
}



export default ModalCardWrapper