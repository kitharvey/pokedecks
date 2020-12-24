import React, {useContext, useRef, useEffect, useState} from 'react'
import { ModalCardProps } from './CardInterface';
import { AppContext } from './Page';
import Card from '../Deck/Card';
import ModalBackCard from './ModalBackCard';
import ReactCardFlip from 'react-card-flip';
import ClickAwayListener from 'react-click-away-listener';
import ModalCardLoader from './ModalCardLoader';

const ModalCardWrapper: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData}) => {
    const [isFlipped, setisFlipped] = useState<boolean>(false)
    const {state, setState} = useContext(AppContext)
    const modalcardRef = useRef<HTMLDivElement>(null);
    
    const handleClickAway = () => {
        setState({...state, id: 0})
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="w-max h-auto flex" ref={modalcardRef}>
                {pokemonSpeciesData && pokemonData
                    ? <ReactCardFlip isFlipped={isFlipped} infinite={true} >
                        <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}  >
                            <Card id={state.id} />
                        </div>
                
                        <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}>
                            <ModalBackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} />
                        </div>
                    </ReactCardFlip>

                    : <ModalCardLoader />
                }
            </div>
        </ClickAwayListener>
    )
}



export default ModalCardWrapper