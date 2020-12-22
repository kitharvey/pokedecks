import React, {useContext, useRef, useEffect, useState} from 'react'
import { ModalCardProps } from './CardInterface';
import { AppContext } from './Page';
import Card from '../Deck/Card';
import BackCard from './ModalBackCard';
import ReactCardFlip from 'react-card-flip';

const ModalCardWrapper: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData, state}) => {
    const [isFlipped, setisFlipped] = useState<boolean>(false)
    const {setState} = useContext(AppContext)
    const modalcardRef = useRef<HTMLDivElement>(null);
    
    const handleClick = (e: any) => {
        if(modalcardRef.current){
            if (!(modalcardRef.current.contains(e.target))) {
                setState({id: 0, sprite: ""})
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
                <div className="cursor-pointer" onClick={() => setisFlipped(!isFlipped)}  >
                    <Card id={state.id} />
                </div>
        
                <div className="cursor-pointer" onClick={() => setisFlipped(!isFlipped)}>
                    <BackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} state={state} />
                </div>
            </ReactCardFlip>
             {/* <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
                style={{
                    cursor: "pointer"
                }}
            >
                <FrontSide style={{padding: 0}} >
                    <Card id={state.id} />
                </FrontSide>
                <BackSide style={{padding: 0}} >
                    <BackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} state={state} />
                </BackSide>
            </Flippy> */}
    </div>
    )
}



export default ModalCardWrapper