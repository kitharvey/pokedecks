import React, {useContext} from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import { AppContext } from './Page';
import LeftCard from './LeftCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import RightCard from './RightCard';







const ModalCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const { 
            data: pokemonData,
            isFetching: isFetchingPokemonData } = useQuery('fetchPokemonData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon/${state.pokemonData.id}`), {refetchOnWindowFocus: false})

    const { 
            data: pokemonSpeciesData, 
            isFetching: isFetchingPokemonSpeciesData } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${state.pokemonData.id}`), {refetchOnWindowFocus: false})
    
    return (
        <div className="h-max w-full flex items-center justify-evenly absolute" >
            {(pokemonData && pokemonSpeciesData && !isFetchingPokemonSpeciesData && !isFetchingPokemonData)
                ? <LeftCard speciesdata={pokemonSpeciesData.data} pokemondata={pokemonData.data} />
                : <LeftCardLoader />
            }
            <div className="h-96 w-80 select-none relative"></div>
            {(pokemonData && pokemonSpeciesData && !isFetchingPokemonSpeciesData && !isFetchingPokemonData)
                ? <RightCard speciesdata={pokemonSpeciesData.data} pokemondata={pokemonData.data} />
                : <RightCardLoader />
            }
        </div>
    )
}


export default ModalCard