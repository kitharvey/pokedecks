import React, {useContext} from 'react'
import ModalBackCardLoader from "./ModalBackCardLoader"
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { AppContext } from './Page';
import ActualModalBackCard from './ActualModalBackCard';








const ModalBackCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const pokemonData = useGetPokemonData(state.id)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.id)
    
    return (
        <div className="w-full h-full" >
            {(pokemonSpeciesData && pokemonData)
                ? <ActualModalBackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} />
                : <ModalBackCardLoader />
            }
        </div>
    )
}


export default ModalBackCard