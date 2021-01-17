import React, {useContext} from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import { AppContext } from '../../Page/Page';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { useGetPokemonData, useGetPokemonSpeciesData } from '../../Fetch/useGetPokemonData';







const ModalCard: React.FC = () => {
    const {stateActivePokemonID} = useContext(AppContext)
    const pokemonData = useGetPokemonData(+stateActivePokemonID)
    const pokemonSpeciesData = useGetPokemonSpeciesData(+stateActivePokemonID)

    
    return (
        <div className="h-max min-h-full w-full flex flex-col items-center justify-evenly bg-white p-4 shadow lg:flex-row" >
            <div className="h-max w-full" >
                <CenterCard />
            </div>
            <div className="h-max w-full" >
                {(pokemonData && pokemonSpeciesData)
                    ? <LeftCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                    : <LeftCardLoader />
                }
            </div>
            <div className="h-max w-full" >
                {(pokemonData && pokemonSpeciesData)
                    ? <RightCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                    : <RightCardLoader />
                }
            </div>

        </div>
    )
}


export default ModalCard