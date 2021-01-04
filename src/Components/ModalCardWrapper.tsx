import React, {useContext} from 'react'
import { AppContext } from './Page';
import Card from '../Deck/Card';
import ModalCard from './ModalCard';
import FramerCard from '../Deck/FramerCard';


const ModalCardWrapper: React.FC = () => {
    const {state} = useContext(AppContext)
  


    return (
        
            <div className="w-full h-full flex items-center justify-center relative" >
                <ModalCard />
                <div className="h-96 w-80 select-none relative">
                            <FramerCard
                                length={2}
                                index={0}
                                pokeArray={[state.pokemonData.species]}
                                initial={{
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    opacity: {
                                    duration: 0.5
                                    }
                                }}
                                whileTap={{ 
                                    cursor: "grabbing",
                                }}
                                drag='x'
                            >
                                <Card id={state.pokemonData.id} />
                            </FramerCard>
                </div>
            </div>
    )
}



export default ModalCardWrapper