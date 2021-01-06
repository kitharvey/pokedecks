import React, {useContext} from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import { AppContext } from '../Page';
import LeftCard from './LeftCard';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { useGetPokemonData, useGetPokemonSpeciesData } from '../../Fetch/useGetPokemonData';







const ModalCard: React.FC = () => {
    const {state} = useContext(AppContext)
    // const { 
    //         data: pokemonSpeciesData, 
    //         isFetching: isFetchingPokemonSpeciesData } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${+state.activePokemonID}`), {refetchOnWindowFocus: false})
    // const { 
    //         data: pokemonData,
    //         isFetching: isFetchingPokemonData } = useQuery('fetchPokemonData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon/${+state.activePokemonID}`), {refetchOnWindowFocus: false})


      const pokemonData = useGetPokemonData(+state.activePokemonID)
      const pokemonSpeciesData = useGetPokemonSpeciesData(+state.activePokemonID)

    
    return (
        <div className="h-max w-full flex items-center justify-evenly absolute" >
            {(pokemonData && pokemonSpeciesData)
                ? <LeftCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                : <LeftCardLoader />
            }
            <CenterCard />
            {(pokemonData && pokemonSpeciesData)
                ? <RightCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                : <RightCardLoader />
            }
        </div>
    )
}


export default ModalCard