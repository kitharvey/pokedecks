import React, {useContext} from 'react'
import LeftCardLoader from "./ModalBackCardLoader"
import { AppContext } from './Page';
import LeftCard from './LeftCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import RightCard from './RightCard';







const ModalCard: React.FC = () => {
    const {state} = useContext(AppContext)
    // const pokemonSpeciesData = useGetPokemonSpeciesData(state.pokemonData.id)
    const { data, isFetching } = useQuery('fetchSpeciesData', async() => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${state.pokemonData.id}`), {refetchOnWindowFocus: false})
    
    console.log(state)
    console.log(data)

    return (
        <div className="h-full w-full flex items-center justify-evenly absolute" >
            {(data && !isFetching && state.pokemonData.id > 0)
                ? <LeftCard speciesdata={data.data} pokemondata={state.pokemonData} />
                : <LeftCardLoader />
            }
            {(data && !isFetching && state.pokemonData.id > 0)
                ? <RightCard speciesdata={data.data} pokemondata={state.pokemonData} />
                : <LeftCardLoader />
            }
            {/* <ModalBackCardLoader /> */}
        </div>
    )
}


export default ModalCard