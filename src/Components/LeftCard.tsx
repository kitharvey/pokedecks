import React, {useContext} from 'react'
import ModalBackCardLoader from "./ModalBackCardLoader"
import {useGetPokemonSpeciesData} from './useGetPokemonData';
import { AppContext } from './Page';
import ActualLeftCard from './ActualLeftCard';








const LeftCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.pokemonData.id)
    
    return (
        <div className="h-96 w-80 shadow" >
            {(pokemonSpeciesData && state.pokemonData.id)
                ? <ActualLeftCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={state.pokemonData} />
                : <ModalBackCardLoader />
            }
        </div>
    )
}


export default LeftCard