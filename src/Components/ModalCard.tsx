import React, {useContext} from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import { AppContext } from './Page';
import LeftCard from './LeftCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import RightCard from './RightCard';







const ModalCard: React.FC = () => {
    const {state} = useContext(AppContext)
    const { data, isFetching } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${state.pokemonData.id}`), {refetchOnWindowFocus: false})
    
    return (
        <div className="h-max w-full flex items-center justify-evenly absolute" >
            {(data && !isFetching && state.pokemonData.id > 0)
                ? <LeftCard speciesdata={data.data} pokemondata={state.pokemonData} />
                : <LeftCardLoader />
            }
            <div className="h-96 w-80 select-none relative"></div>
            {(data && !isFetching && state.pokemonData.id > 0)
                ? <RightCard speciesdata={data.data} pokemondata={state.pokemonData} />
                : <RightCardLoader />
            }
        </div>
    )
}


export default ModalCard