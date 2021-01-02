import React, {useContext} from 'react'
import ModalBackCardLoader from "./ModalBackCardLoader"
import {useGetPokemonSpeciesData} from './useGetPokemonData';
import { AppContext } from './Page';
import ActualModalBackCard from './ActualModalBackCard';








const ModalBackCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.pokemonData.id)
    
    return (
        <div className="w-full h-full" >
            {(pokemonSpeciesData && state.pokemonData.id)
                ? <ActualModalBackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={state.pokemonData} />
                : <ModalBackCardLoader />
            }
        </div>
    )
}


export default ModalBackCard