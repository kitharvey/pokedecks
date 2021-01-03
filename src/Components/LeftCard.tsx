import React, {useContext} from 'react'
import ModalBackCardLoader from "./ModalBackCardLoader"
import {useGetPokemonSpeciesData} from './useGetPokemonData';
import { AppContext } from './Page';
import ActualLeftCard from './ActualLeftCard';
import { useQuery } from 'react-query';
import { fetchPokemonSpeciesData } from "../Components/useGetPokemonData";







const LeftCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.pokemonData.id)
    const { data, error } = useQuery('fetchSpeciesData', async() => await fetchPokemonSpeciesData(state.pokemonData.id), {refetchOnWindowFocus: false})
    
    return (
        <div className="h-max w-96 transition-all duration-500 ease-in-out shadow" >
            {(data && state.pokemonData.id)
                ? <ActualLeftCard pokemonSpeciesData={data} pokemonData={state.pokemonData} />
                : <ModalBackCardLoader />
            }
            {/* <ModalBackCardLoader /> */}
        </div>
    )
}


export default LeftCard