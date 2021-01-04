import React, {useContext, useEffect} from 'react'
import { AppContext, appCtxDefaultValue } from './Page';
import Card from '../Deck/Card';
import LeftCard from './LeftCard';
import ClickAwayListener from 'react-click-away-listener';
import FramerCard from '../Deck/FramerCard';


const ModalCardWrapper: React.FC = () => {
    const {state, setState} = useContext(AppContext)
    
    const handleClickAway = () => {
        setState({...state, pokemonData: appCtxDefaultValue.state.pokemonData})
    };

    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    return (
        <ClickAwayListener className="w-full h-full" onClickAway={handleClickAway}>
            <div className="bg-white w-full h-full shadow-lg flex items-center justify-around" >
                <LeftCard />
                <div className="h-96 w-80 select-none relative">
                            <FramerCard
                                length={2}
                                index={0}
                                pokeArray={[state.pokemonData.species]}
                                initial={{
                                    scale: .95,
                                    y: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                                    scale: .95,
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
                                // whileHover={{
                                //     scale: 1,
                                //     boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
                                //   }}
                                whileTap={{ 
                                    cursor: "grabbing",
                                    // scale: 1,
                                    // boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
                                }}
                                drag='x'
                            >
                                <Card id={state.pokemonData.id} />
                            </FramerCard>
                </div>
                <LeftCard />
            </div>
           
        </ClickAwayListener>
    )
}



export default ModalCardWrapper