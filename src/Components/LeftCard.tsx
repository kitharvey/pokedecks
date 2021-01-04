import React, {useContext} from 'react'
import ModalBackCardLoader from "./ModalBackCardLoader"
import {useGetPokemonSpeciesData} from './useGetPokemonData';
import { AppContext } from './Page';
import ActualLeftCard from './ActualLeftCard';
import { useQuery } from 'react-query';
import { fetchPokemonSpeciesData } from "../Components/useGetPokemonData";
import axios from 'axios';







const LeftCard: React.FC = () => {
    const {state} = useContext(AppContext)
    // const pokemonSpeciesData = useGetPokemonSpeciesData(state.pokemonData.id)
    const { data, isFetching } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${state.pokemonData.id}`), {refetchOnWindowFocus: false})
    
    return (
        <div className="h-max w-96 transition-all duration-500 ease-in-out" >
            {(data && !isFetching && state.pokemonData.id > 0)
                ? <ActualLeftCard speciesdata={data.data} pokemondata={state.pokemonData} />
                : <ModalBackCardLoader />
            }
            {/* <ModalBackCardLoader /> */}
        </div>
    )
}


export default LeftCard