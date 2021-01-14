import React, {useContext} from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import { AppContext } from '../../Page/Page';
import LeftCard from './LeftCard';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { useGetPokemonData, useGetPokemonSpeciesData } from '../../Fetch/useGetPokemonData';







const ModalCard: React.FC = () => {
    const {stateActivePokemonID} = useContext(AppContext)
    // const { 
    //         data: pokemonSpeciesData, 
    //         isFetching: isFetchingPokemonSpeciesData } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${+state.activePokemonID}`), {refetchOnWindowFocus: false})
    // const { 
    //         data: pokemonData,
    //         isFetching: isFetchingPokemonData } = useQuery('fetchPokemonData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon/${+state.activePokemonID}`), {refetchOnWindowFocus: false})


      const pokemonData = useGetPokemonData(+stateActivePokemonID)
      const pokemonSpeciesData = useGetPokemonSpeciesData(+stateActivePokemonID)

    
    return (
        <div className="h-max w-full flex flex-col items-center justify-evenly sm:flex-row" >
            <div className="h-max w-max" >
                {(pokemonData && pokemonSpeciesData)
                    ? <LeftCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                    : <LeftCardLoader />
                }
            </div>
            <div className="h-max w-max" >
                <CenterCard />
            </div>
            <div className="h-max w-max" >
                {(pokemonData && pokemonSpeciesData)
                    ? <RightCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                    : <RightCardLoader />
                }
            </div>

        </div>
    )
}


export default ModalCard