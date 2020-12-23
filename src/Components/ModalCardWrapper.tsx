import React, {useContext, useRef, useEffect, useState} from 'react'
import { ModalCardProps } from './CardInterface';
import { AppContext } from './Page';
import Card from '../Deck/Card';
import BackCard from './ModalBackCard';
import ReactCardFlip from 'react-card-flip';

const ModalCardWrapper: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData}) => {
    const [isFlipped, setisFlipped] = useState<boolean>(false)
    const {state, setState} = useContext(AppContext)
    const modalcardRef = useRef<HTMLDivElement>(null);
    
    const handleClick = (e: any) => {
        if(modalcardRef.current){
            if (!(modalcardRef.current.contains(e.target))) {
                setState({...state, id: 0})
            }
        }         
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
    return (
        <div className="w-max h-auto flex" ref={modalcardRef}>
            <ReactCardFlip isFlipped={isFlipped} infinite={true} >
                <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}  >
                    <Card id={state.id} />
                </div>
        
                <div className="cursor-pointer h-96 w-80 " onClick={() => setisFlipped(!isFlipped)}>
                    <BackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} />
                </div>
            </ReactCardFlip>
        </div>
    )
}



export default ModalCardWrapper